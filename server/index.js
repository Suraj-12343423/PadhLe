// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const User = require('./Models/User');
const crypto = require('crypto');
const auth = require('./Middleware/auth')

const web = express();

web.use(cors({
  origin: 'http://localhost:5173', // Allow only this origin
  credentials: true, // Enable sending cookies with CORS requests
}))
web.use(express.json()); // Middleware to parse JSON bodies
web.use(cookieParser()); // Middleware to parse cookies

// Async IIFE to handle connection to MongoDB using mongoose
(async () => {
  try {
    // Connecting to MongoDB database using the connection URI from environment variables
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
})();

// Registering a new user
web.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password with bcrypt before saving it to the database
  const user = new User({ username, password: await bcrypt.hash(password, 10) });
  await user.save();

  // Send a 201 status code indicating that the user has been successfully registered
  res.status(201).send('User Registered');
});

// Login user
web.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send('Invalid Credentials');
  }

  // Compare the provided password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid Credentials');
  }

  // Sign a JWT token with the user's ID and a secret key
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

  // Set the JWT token as a cookie
  res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });

  // Send a success message
  res.send('Login Successful');
});

// Protected route that requires authentication
web.get('/protected', auth, (req, res) => {
  res.send('This is a protected route');
});

// Start the server and listen on port 5000
web.listen(5000, () => {
  console.log("Server running on port 5000");
});

const jwt = require('jsonwebtoken');

// Middleware function to authenticate user based on JWT token in cookies
const auth = (req, res, next) => {
  // Retrieve the token from cookies
  const { token } = req.cookies;
  
  // If token is not present, send an unauthorized response
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    // Verify the token using the secret key and extract the userId
    const { userId } = jwt.verify(token, process.env.SECRET_KEY);
    // Attach the userId to the request object for use in subsequent middleware or routes
    req.userId = userId;
    // Call the next middleware or route handler
    next();
  } catch {
    // If token verification fails, send an unauthorized response
    res.status(401).send('Unauthorized');
  }
};

// Export the auth middleware function for use in other parts of the application
module.exports = auth;

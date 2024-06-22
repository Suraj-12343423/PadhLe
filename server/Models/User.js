const mongoose = require('mongoose')
//making  Schemas -> For authentication 
const UserSchema = new mongoose.Schema({
    //Setting rules for the login details
    username: { type: String, unique: true, required: true },
    password: {type: String, required: true}
})

//Exporting Schema->so that it can be used anywhere in the backend
module.exports = mongoose.model('User',UserSchema);
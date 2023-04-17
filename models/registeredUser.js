const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true   
  },
  lastname: {
    type: String,
    trim: true   
  },
  username: {
    type: String,
    trim: true,
    unique: true
  },
  password: {
    type: String,  
  },

  phonenumber: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    unique: true
  }, 
  role: {
    type: String,
    unique: true
  },
  
});

userSchema.plugin(passportLocalMongoose,);
module.exports = mongoose.model('RegisteredUser', userSchema);
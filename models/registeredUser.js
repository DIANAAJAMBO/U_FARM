const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
  clientfirstname: {
    type: String,
    trim: true   
  },
  clientlastname: {
    type: String,
    trim: true   
  },
  clientemail: {
    type: String,
    trim: true,
    unique: true
  },
  phonenumber: {
    type: String,
    trim: true
  },
  clientrole: {
    type: String,
    unique: true
  }, 
  clientusername: {
    type: String,
    trim: true,
    unique: true
  },
  clientpassword: {
    type: String,  
  }

  
  
});

userSchema.plugin(passportLocalMongoose,);
module.exports = mongoose.model('RegisteredUser', userSchema);
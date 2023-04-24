const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const urbanfarmerSchema = new mongoose.Schema({
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
  NIN: {
    type: String,
    trim: true 
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
  birthdate: {
    type: Date,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },

  ward: {
    type: String,
    trim: true
  },
  
  role: {
    type: String,
    
  },
  uniqueID: {
    type: String,
   
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now
  },
  ufactivities: {
    type: [String],    //defining the field as an array of strings
    
  }
  
});

urbanfarmerSchema.plugin(passportLocalMongoose,);
module.exports = mongoose.model('RegisteredUF', urbanfarmerSchema);
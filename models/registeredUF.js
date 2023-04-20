const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const urbanfarmerSchema = new mongoose.Schema({
  uffirstname: {
    type: String,
    trim: true
    
  },
  uflastname: {
    type: String,
    trim: true
    
  },
  ufusername: {
    type: String,
    trim: true,
    unique: true
  },
  ufpassword: {
    type: String,
    
    
  },
  ufNIN: {
    type: String,
    trim: true
    
  },
  ufphonenumber: {
    type: String,
    trim: true
  },
  ufemail: {
    type: String,
    trim: true,
    unique: true
  },
  ufbirthdate: {
    type: Date,
    trim: true
  },
  ufgender: {
    type: String,
    trim: true
  },
 
  ufward: {
    type: String,
    trim: true
  },
  
  ufrole: {
    type: String,
    unique: true
  },
  ufNumber: {
    type: String,
    unique: true
  },
  ufdateOfRegistration: {
    type: Date,
    default: Date.now
  },
  ufactivities: {
    type: [String],    //defining the field as an array of strings
    
  }
  
});

urbanfarmerSchema.plugin(passportLocalMongoose,);
module.exports = mongoose.model('RegisteredUF', urbanfarmerSchema);
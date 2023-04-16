const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const urbanFarmerSchema = new mongoose.Schema({
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
  directionsToHome: {
    type: String,
    trim: true
  },
  residenceType: {
    type: String,
    trim: true
  },
  ward: {
    type: String,
    trim: true
  },
  periodOfStayInWard: {
    type: Number,
    trim: true,
    min: 10
  },
  foNumber: {
    type: String,
    unique: true
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now
  },
  activities: {
    type: [String],    //defining the field as an array of strings
    
  }
  
});

farmerOneSchema.plugin(passportLocalMongoose,);
module.exports = mongoose.model('RegisteredFO', farmerOneSchema);
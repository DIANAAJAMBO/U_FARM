const mongoose = require('mongoose');

const farmerOneSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  NIN: {
    type: String,
    required: true,
    minlength: 13,
    maxlength: 13
  },
  phoneNumber: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  directionsToHome: {
    type: String,
    required: true
  },
  residenceType: {
    type: String,
    required: true
  },
  ward: {
    type: String,
    required: true
  },
  periodOfStayInWard: {
    type: Number,
    required: true,
    min: 10
  },
  foNumber: {
    type: String,
    required: true,
    unique: true
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now
  },
  activities: {
    type: [String],
    required: true
  }
  
});

const FarmerOne = mongoose.model('RegisterFO', farmerOneSchema);


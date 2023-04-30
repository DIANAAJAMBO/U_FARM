const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const gpSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true   
  },
  lastname: {
    type: String,
    trim: true   
  },
  email: {
    type: String,
    trim: true,
    unique: true
  },
  phonenumber: {
    type: String,
    trim: true
  },
  role: {
    type: String,
  
  }, 
  username: {
    type: String,
    trim: true,
    unique: true
  },

  
  
});

gpSchema.plugin(passportLocalMongoose,);
module.exports = mongoose.model('RegisteredGP', gpSchema);
//importing environments
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

// add the Passport-Local Mongoose plugin to the schema for authentication, password hashing and salting and username
gpSchema.plugin(passportLocalMongoose,);

//exporting the model
module.exports = mongoose.model('RegisteredGP', gpSchema);
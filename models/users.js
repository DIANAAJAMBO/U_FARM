//importing environments
const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    trim: true
  },
  role: {
    type: String,
  },
  username: {
    type: String,
    trim: true,
  },
});

// add the Passport-Local Mongoose plugin to the schema for authentication, password hashing and salting and username 
userSchema.plugin(passportLocalMongoose,);

//exporting the model
module.exports = mongoose.model("User", userSchema)
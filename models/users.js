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

  
userSchema.plugin(passportLocalMongoose,);
module.exports = mongoose.model("User",  userSchema)
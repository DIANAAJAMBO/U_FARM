//import mongoose library
const mongoose = require('mongoose');

//Produce schema
const produceSchema = new mongoose.Schema({
  producename: {
    type: String,
  },
  wardname: {
    type: String,
  },
  uniqueid: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  unitprice: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  paymentmode: {
    type: String,
    enum: ['cash', 'mobile money']
  },
  directions: {
    type: String,
  },
  deliverymode: {
    type: String,
    enum: ['pickup', 'home delivery']   //validation for specifying the calues acepted in a particular field
  },
  producetype: {
    type: String,
    enum: ['organic', 'non organic']
  },
  produceimage: {
    type: String
  },
  status: {
    type: String,
    default: 'Pending'  //default value if no value has been selected upon form submission

  }

});

//exporting the produce model
//mongoose.model is a method used to perform CRUD on documents in mongoose
module.exports = mongoose.model('Produce', produceSchema);



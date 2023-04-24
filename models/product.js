const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: {
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
    enum: ['pickup', 'home delivery']
  },
  producetype: {
    type: String,
    enum: ['organic','non organic']
  },
  productimage:{
    type:String
  },
  status:{
    type: String,
    default: 'Pending'
    
  }
 
});


module.exports = mongoose.model('Product', productSchema);



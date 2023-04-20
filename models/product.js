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
  paymentMode: {
    type: String, 
    enum: ['cash', 'mobile money', 'card']
  },
  directions: {
    type: String,
  },
  deliverymode: {
    type: String, 
    enum: ['pickup', 'delivery']
  },
  producetype: {
    type: String,
    enum: ['fruits', 'vegetables','meat','dairy','grains','eggs']
  },
  productImage:{
    type:String
  }
 
});


module.exports = mongoose.model('Product', productSchema);

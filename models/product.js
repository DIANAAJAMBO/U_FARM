const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  wardname: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  unitprice: {
    type: Number,
    required: true,
    min: 0
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  modeofpayment: {
    type: Number,
    required: true,
    min: 0
  },
  directions: {
    type: Number,
    required: true,
    min: 0
  },
  modeofdelivery: {
    type: Number,
    required: true,
    min: 0
  },
  produce: {
    type: Number,
    required: true,
    min: 0
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Product', productSchema);

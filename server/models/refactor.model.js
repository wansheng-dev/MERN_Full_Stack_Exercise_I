const mongoose = require('mongoose');

const Product2Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [
        true,
        'Title is requried.'
      ]
    },
    price: {
      type: Number,
      required: [
        true,
        'Price is requried.'
      ]
    },
    desc: {
      type: String,
      required: [
        true,
        'Description is requried.'
      ]
    },
    imgURL: {
      type: String,
      required: [
        true,
        'Image URL is requried.'
      ]
    }
  },
  {
    timestamps: true
  }
);

const Product2 = mongoose.model('Prodcut2', Product2Schema);

module.exports = Product2;
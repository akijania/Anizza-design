const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  address: { type: String, required: true },
  post: { type: String, required: true },
  town: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  products: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);

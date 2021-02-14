const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  category: { type: String, required: true },
  photo: { type: String, required: true },
  photo2: { type: String, required: false },
  price: { type: Number, required: true },
  size: { type: Boolean },
  material: { type: String },
});

module.exports = mongoose.model('Product', productSchema);

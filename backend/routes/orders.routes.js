const express = require('express');
const router = express.Router();
const Joi = require('joi');

const Order = require('../models/order.model');

router.post('/orders', async (req, res) => {
  const product = Joi.object().keys({
    id: Joi.string().required(),
    title: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    text: Joi.string().max(50),
  });
  const schema = Joi.object({
    date: Joi.date().iso().required(),
    name: Joi.string().min(2).max(20).required(),
    surname: Joi.string().min(2).max(20).required(),
    address: Joi.string().min(2).max(20).required(),
    post: Joi.string().min(2).max(20).required(),
    town: Joi.string().min(2).max(20).required(),
    country: Joi.string().min(2).max(20).required(),
    email: Joi.string().min(3).max(50).required(),
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'pl'] },
    phone: Joi.string().min(9).max(14).required(),
    totalPrice: Joi.number().required(),
    products: Joi.array().items(product).min(1).unique().required(),
  });
  try {
    const {
      date,
      name,
      surname,
      address,
      post,
      town,
      country,
      email,
      phone,
      totalPrice,
      products,
    } = req.body;
    const value = await schema.validateAsync({
      date: date,
      name: name,
      surname: surname,
      address: address,
      post: post,
      town: town,
      country: country,
      email: email,
      phone: phone,
      totalPrice: totalPrice,
      products: products,
    });
    const newPost = new Order(value);
    await newPost.save();
    res.json({ message: value });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ message: err.message });
      console.log(err.message);
    } else {
      res.status(500).json({ message: err.message });
    }
  }
});

module.exports = router;

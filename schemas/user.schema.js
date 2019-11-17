const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 4, maxlength: 15, unique: true },
  password: { type: String, required: true, minlength: 6, maxlength: 15 },
});

module.exports = schema;
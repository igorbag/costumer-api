const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 50 },
});

module.exports = schema;
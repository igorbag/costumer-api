const mongoose = require('mongoose');

const schemaSocial = new mongoose.Schema({
  socialName: { type: String, minlength: 5, maxlength: 100 },
  link: { type: String, minlength: 10, maxlength: 100 }
});

module.exports = schemaSocial;
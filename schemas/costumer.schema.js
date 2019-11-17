const mongoose = require('mongoose');
const socialSchema = require('./social.schema');

const schema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 10, maxlength: 100 },
  cpf: { type: Number, required: true, minlength: 11, maxlength: 11 , unique: true},
  email: { type: String, required: true, minlength: 10, maxlength: 50 },
  phone: { type: String, required: true, minlength: 10, maxlength: 20},
  address: { type: String, required: true, minlength: 5, maxlength: 100},
  //social: { type: [socialSchema], ref: 'Social', default: [] }
});

module.exports = schema;
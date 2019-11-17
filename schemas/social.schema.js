const mongoose = require('mongoose');

const socialNetworkSchema = new mongoose.Schema({
  socialNetwork: { type: String, required: true, minlength: 5, maxlength: 50 , unique:true},
});

module.exports = socialNetworkSchema;
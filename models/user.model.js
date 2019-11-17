const mongoose = require('mongoose');
const userSchema = require('../schemas/user.schema');

const UserModel = mongoose.model('User', userSchema, 'users');

class User {

  static authenticate(username, password) {
    const query = { username, password };
    return UserModel.findOne(query).populate().lean();
  }z

}

module.exports = User;
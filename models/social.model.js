const mongoose = require('mongoose');
const socialSchema = require('../schemas/social.schema');
const SocialModel = mongoose.model('Social', socialSchema, 'socials');

class Social {
  static create(costumer) {
    return SocialModel.create(costumer);
  }

  static getById(_id) {
    return SocialModel.findOne({ _id }).lean();
  }

  static update(costumer) {
    return SocialModel.update({ _id: costumer._id }, costumer);
  }

  static delete(_id) {
    return SocialModel.deleteOne({ _id });
  }

  static getAll() {
    return SocialModel.find().lean();
  }
}

module.exports = Social;
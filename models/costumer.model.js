const mongoose = require('mongoose');
const costumerSchema = require('../schemas/costumer.schema');
const CostumerModel = mongoose.model('Costumer', costumerSchema, 'costumers');

class Costumer {
  static create(costumer) {
    return CostumerModel.create(costumer);
  }

  static getById(_id) {
    return CostumerModel.findOne({ _id }).lean();
  }

  static update(costumer) {
    return CostumerModel.update({ _id: costumer._id }, costumer);
  }

  static delete(_id) {
    return CostumerModel.deleteOne({ _id });
  }

  static getAll() {
    return CostumerModel.find().lean();
  }
}

module.exports = Costumer;
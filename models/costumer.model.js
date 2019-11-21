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

  static findByQuery(_query) {
    let query = {}

    if(_query.name != null){
      query = {'name': {'$regex': _query.name}};
    }

    if(_query.cpf != null){
      query = {cpf: {'$regex': _query.cpf}};
    }

    if(_query.phone != null){
      query = {'phone': {'$regex': _query.phone}};
    }

    if(_query.email != null){
      query = {'email': {'$regex': _query.email}};
    }
    return CostumerModel.find(query).lean();
  }
}

module.exports = Costumer;
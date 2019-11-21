const express = require('express');
const HttpStatusCodes = require('http-status-codes');
const Costumer = require('../models/costumer.model');
const route = express.Router();

route.get('/costumers/:id', async (req, res, next) => {
    try {
      const costumer = await Costumer.getById(req.params.id);
      if (costumer) {
        res.send(costumer);
      } else {
        res.sendStatus(HttpStatusCodes.NOT_FOUND);
      }
    } catch (error) {
      res.sendStatus(HttpStatusCodes.INTERNAL_SERVER_ERROR);
    }
});


route.get('/costumers', async (req, res, next) => {
    try {
      const costumer = await Costumer.findByQuery(req.query);
      res.send(costumer);
    } catch (error) {
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
});
  
 route.post('/costumers', async (req, res, next) => {
    try {
      await Costumer.create(req.body);
      const responseBody = { message: 'Registro inserido com sucesso!' };
      res.status(HttpStatusCodes.CREATED).send(responseBody);
    } catch (error) {
      res.status(HttpStatusCodes.BAD_REQUEST).send(error);
    }
});
  
  route.put('/costumers/:id', async (req, res, next) => {
    try {
      req.body._id = req.params.id;
      await Costumer.update(req.body);
      const responseBody = { message: 'Registro atualizado com sucesso!' };
      res.status(HttpStatusCodes.OK).send(responseBody);
    } catch (error) {
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  });
  
  route.delete('/costumers/:id', async (req, res, next) => {
    try {
      await Costumer.delete(req.params.id);
      const responseBody = { message: 'Registro removido com sucesso!' };
      res.status(HttpStatusCodes.OK).send(responseBody);
    } catch (error) {
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  });
    
  module.exports = route;

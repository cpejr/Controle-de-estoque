const express = require('express');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const reloadController = require('./controllers/reloadControler')
const SessionController = require('./controllers/SessionController')

const storageChangeRecordValidator = require('./validators/storageChangeRecordValidator');
const reloadValidator = require('./validators/reloadValidator');
const { celebrate } = require('celebrate');
const routes = express.Router();

routes.get('/productManagement', productController.index);
routes.post('/productManagement', productController.create);
routes.delete('/productManagement', productController.delete);
routes.put('/productManagement', productController.editProduct);

routes.get('/reload', reloadController.allReloads);
routes.post('/reload',celebrate(reloadValidator.createReload), reloadController.createReload);

routes.post('/userManagement', userController.create);
routes.get('/userManagement', userController.index);
routes.delete('/userManagement', userController.delete);
routes.put('/userManagement', userController.update);

//STORAGE CHANGE RECORD
routes.get('/recordManagement', storageChangeRecordController.history);
routes.get('/recordManagement', storageChangeRecordController.cancelledHistory);
routes.post('/recordManagement',celebrate(storageChangeRecordValidator.retrieve), storageChangeRecordController.retrieve);
routes.delete('/recordManagement',celebrate(storageChangeRecordValidator.delete) , storageChangeRecordController.delete);

//Session
routes.post('/login', SessionController.login);

module.exports = routes;

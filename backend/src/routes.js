const express = require('express');
const { celebrate } = require("celebrate");
const routes = express.Router();

const userController = require('./controllers/userController');
const userValidator = require('./validators/userValidator')

const productController = require('./controllers/productController');
const productValidator = require("./validators/productValidator");

const storageChangeRecordValidator = require('./validators/storageChangeRecordValidator');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');

const reloadValidator = require('./validators/reloadValidator');
const reloadController = require('./controllers/reloadControler');

const SessionController = require('./controllers/SessionController')


routes.get('/productManagement', productController.index);
routes.post('/productManagement', celebrate(productValidator.create), productController.create);
routes.delete('/productManagement', celebrate(productValidator.delete), productController.delete);
routes.put('/productManagement', celebrate(productValidator.editProduct), productController.editProduct);

//Reload
routes.get('/reload', reloadController.allReloads);
routes.post('/reload',celebrate(reloadValidator.createReload), reloadController.createReload);

//User
routes.post('/userManagement', celebrate(userValidator.create), userController.create);
routes.get('/userManagement', userController.index);
routes.delete('/userManagement', celebrate(userValidator.delete), userController.delete);
routes.put('/userManagement', celebrate(userValidator.update), userController.update);
routes.put('/changePassword', userController.changePassword);
routes.post('/forgotPassword', userController.forgotPassword);


//STORAGE CHANGE RECORD
routes.get('/recordManagement', storageChangeRecordController.history);
routes.get('/recordManagement', storageChangeRecordController.cancelledHistory);
routes.post('/recordManagement',celebrate(storageChangeRecordValidator.retrieve), storageChangeRecordController.retrieve);
routes.delete('/recordManagement',celebrate(storageChangeRecordValidator.delete) , storageChangeRecordController.delete);

//Session
routes.post('/login', SessionController.login);

module.exports = routes;

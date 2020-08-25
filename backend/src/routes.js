const express = require('express');
const { celebrate } = require("celebrate");
const routes = express.Router();

const userController = require('./controllers/userController');
const userValidator = require('./validators/userValidator')

const productController = require('./controllers/productController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const reloadController = require('./controllers/reloadControler');
const SessionController = require('./controllers/SessionController');



const { celebrate } = require("celebrate");

const productValidator = require("./validators/productValidator");

routes.get('/productManagement', productController.index);
routes.post('/productManagement', celebrate(productValidator.create), productController.create);
routes.delete('/productManagement', celebrate(productValidator.delete), productController.delete);
routes.put('/productManagement', celebrate(productValidator.editProduct), productController.editProduct);

//Reload
routes.get('/reload', reloadController.allReloads);
routes.post('/reload', reloadController.createReload);

//User
routes.post('/userManagement', celebrate(userValidator.create), userController.create);
routes.get('/userManagement', userController.index);
routes.delete('/userManagement', celebrate(userValidator.delete), userController.delete);
routes.put('/userManagement', celebrate(userValidator.update), userController.update);
routes.put('/changePassword', userController.changePassword);
routes.post('/forgotPassword', userController.forgotPassword);

//Records
routes.get('/recordManagement', storageChangeRecordController.history);
routes.get('/recordManagement', storageChangeRecordController.cancelledHistory);
routes.post('/recordManagement', storageChangeRecordController.retrieve);
routes.delete('/recordManagement', storageChangeRecordController.delete);

//Session
routes.post('/login', SessionController.login);

module.exports = routes;

const express = require('express');
const { celebrate } = require("celebrate");
const routes = express.Router();

const acessToken = require("./middlewares/auth")

const userController = require('./controllers/userController');
const userValidator = require('./validators/userValidator')

const productController = require('./controllers/productController');
const productValidator = require("./validators/productValidator");

const storageChangeRecordValidator = require('./validators/storageChangeRecordValidator');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');

const reloadValidator = require('./validators/reloadValidator');
const reloadController = require('./controllers/reloadControler');

const sessionController = require('./controllers/sessionController')
const sessionValidator = require('./validators/sessionValidator')


routes.get('/productManagement', acessToken.authenticateToken, productController.index);
routes.post('/productManagement', acessToken.authenticateToken, celebrate(productValidator.create), productController.create);
routes.delete('/productManagement', acessToken.authenticateToken, celebrate(productValidator.delete), productController.delete);
routes.put('/productManagement', acessToken.authenticateToken, celebrate(productValidator.editProduct), productController.editProduct);

//Reload
routes.get('/reload', acessToken.authenticateToken, reloadController.allReloads);
routes.post('/reload',acessToken.authenticateToken, celebrate(reloadValidator.createReload), reloadController.createReload);

//User
routes.post('/userManagement/employee', acessToken.authenticateToken, acessToken.isAdmOrManager, celebrate(userValidator.create), userController.create);
routes.post('/userManagement/manager', acessToken.authenticateToken, acessToken.isAdm, celebrate(userValidator.create), userController.create);
routes.get('/userManagement', acessToken.authenticateToken, userController.index);
routes.delete('/userManagement/employee', acessToken.authenticateToken, acessToken.isAdmOrManager, celebrate(userValidator.delete), userController.delete);
routes.delete('/userManagement/manager', acessToken.authenticateToken, acessToken.isAdm, celebrate(userValidator.delete), userController.delete);
routes.put('/userManagement', acessToken.authenticateToken, celebrate(userValidator.update), userController.update);
routes.put('/changePassword', acessToken.authenticateToken, userController.changePassword);
routes.post('/forgotPassword', acessToken.authenticateToken, userController.forgotPassword);


//STORAGE CHANGE RECORD
routes.get('/recordManagement', acessToken.authenticateToken, storageChangeRecordController.history);
routes.get('/recordManagement', acessToken.authenticateToken, storageChangeRecordController.cancelledHistory);
routes.post('/recordManagement', acessToken.authenticateToken, celebrate(storageChangeRecordValidator.retrieve), storageChangeRecordController.retrieve);
routes.delete('/recordManagement', acessToken.authenticateToken, celebrate(storageChangeRecordValidator.delete) , storageChangeRecordController.delete);

//Session
routes.post('/login', celebrate(sessionValidator.login), sessionController.login);

module.exports = routes;

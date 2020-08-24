const express = require('express');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const reloadController = require('./controllers/reloadControler')
const routes = express.Router();

const { celebrate } = require("celebrate");

const productValidator = require("./validators/productValidator");

routes.get('/productManagement', productController.index);
routes.post('/productManagement', celebrate(productValidator.create), productController.create);
routes.delete('/productManagement', celebrate(productValidator.delete), productController.delete);
routes.put('/productManagement', celebrate(productValidator.editProduct), productController.editProduct);

routes.get('/reload', reloadController.allReloads);
routes.post('/reload', reloadController.createReload);

routes.post('/userManagement', userController.create);
routes.get('/userManagement', userController.index);
routes.delete('/userManagement', userController.delete);
routes.put('/userManagement', userController.update);

routes.get('/recordManagement', storageChangeRecordController.history);
routes.get('/recordManagement', storageChangeRecordController.cancelledHistory);
routes.post('/recordManagement', storageChangeRecordController.retrieve);
routes.delete('/recordManagement', storageChangeRecordController.delete);


module.exports = routes;

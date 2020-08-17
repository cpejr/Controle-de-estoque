const express = require('express');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const reloadController = require('./controllers/reloadControler')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.get('/productManagement', productController.index);
routes.post('/productManagement', productController.create);
routes.delete('/productManagement', productController.delete);
routes.put('/productManagement', productController.editProduct);

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

//Session
routes.post('/login', SessionController.login);

module.exports = routes;

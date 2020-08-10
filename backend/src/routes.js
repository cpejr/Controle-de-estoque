const express = require('express');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const productListController = require('./controllers/productListController');
const sessionController = require('./controllers/sessionController');
const routes = express.Router();


routes.get('/', (req,res)=> {
    return res.json('Souzão é lindo');
});

routes.get('/productManagement', productController.index);
routes.post('/productManagement', productController.create);
routes.delete('/productManagement/:id', productController.delete);
routes.put('/productManagement/:id', productController.editProduct)

routes.post('/newUser', userController.create);
routes.get('/listUser', userController.index);
routes.delete('/deleteUser', userController.delete);
routes.put('/updateUser', userController.update)

routes.post('/logout', sessionController.logout);
routes.post('/session', sessionController.create);

routes.get('/storageChangeRecord/:id', storageChangeRecordController.index);
routes.post('/storageChangeRecord/:id', storageChangeRecordController.create);
routes.delete('/storageChangeRecord/:id', userController.delete);

routes.delete('/productList/:productID', productListController.delete);
routes.get('/productListSearch/:productID', productListController.search);
routes.get('/productList', productListController.index);
routes.post('/productList', productListController.create);




module.exports = routes;

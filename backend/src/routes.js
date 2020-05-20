const express = require('express');
const connection = require('./database/connection');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const routes = express.Router();


routes.get('/', (req,res)=> {
    return res.json('Souzão é lindo');
});

routes.get('/productList', productController.index);
routes.post('/newProduct', productController.create);

routes.post('/newUser', userController.create);
routes.get('/listUser', userController.index);

routes.get('/storageChangeRecord', storageChangeRecordController.index);


module.exports = routes;

const express = require('express');
const connection = require('./database/connection');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const routes = express.Router();


routes.get('/', (req,res)=> {
    return res.json('Souzão é lindo');
});

routes.get('/productManagement', productController.index);
routes.post('/productManagement', productController.create);
routes.delete('/productManagement/:id', productController.delete);
routes.get('/search/:id', productController.search);

routes.post('/newUser', userController.create);
routes.get('/listUser', userController.index);

routes.get('/storageChangeRecord', storageChangeRecordController.index);
routes.post('/storageChangeRecord', storageChangeRecordController.create);




module.exports = routes;

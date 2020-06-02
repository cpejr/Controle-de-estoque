const express = require('express');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const productListController = require('./controllers/productListController');
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
routes.delete('/deleteUser/:userCPF', userController.delete);
routes.get('/selectUser/:userCPF', userController.selectUser);
routes.put('/edituserinfo', userController.editinfo);
routes.put('/edituserpass', userController.editpass);


routes.get('/storageChangeRecord', storageChangeRecordController.index);
routes.post('/storageChangeRecord', storageChangeRecordController.create);
routes.get('/averageConsumption/:product_id',storageChangeRecordController.averageConsumption)



routes.delete('/productList/:productID', productListController.delete);
routes.get('/productListSearch/:productID', productListController.search);
routes.get('/productList', productListController.index);
routes.post('/productList', productListController.create);




module.exports = routes;

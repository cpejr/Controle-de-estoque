const express = require('express');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const storageChangeRecordController = require('./controllers/storageChangeRecordController');
const routes = express.Router();


routes.get('/', (req,res)=> {
    return res.json('Souzão é lindo');
});

//PRODUCTS ROUTES
routes.get('/productManagement', productController.index);
routes.post('/productManagement', productController.create);
routes.delete('/productManagement/:id', productController.delete);
routes.get('/search/:id', productController.search);
routes.put('/editProduct', productController.editProduct);

//USER ROUTES
routes.post('/newUser', userController.create);
routes.get('/listUser', userController.index);
routes.delete('/deleteUser/:userCPF', userController.delete);
routes.get('/selectUser/:userCPF', userController.selectUser);
routes.put('/edituserpass', userController.editpass);
routes.put('/editinfo', userController.edituserinfo);

//STORAGE RECORD ROUTES
routes.get('/storageChangeRecord', storageChangeRecordController.index);
routes.post('/storageChangeRecord', storageChangeRecordController.create);
routes.get('/averageConsumption',storageChangeRecordController.averageConsumption);
routes.delete('/averageConsumptiondelete',storageChangeRecordController.delete);




module.exports = routes;

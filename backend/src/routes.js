const express = require('express');
const connection = require('./database/connection');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const routes = express.Router();


routes.get('/', (req,res)=> {
    return res.json('joão é lindo');
});

routes.get('/productList', productController.index);
routes.post('/newProduct', productController.create);

//Rotas de usuário:
/*
    Utilizamos metodos do arquivo userController.js para criar todas as funções das rotas.
*/

//Rota para criar um novo usuário
routes.post('/newUser', userController.create);

//Rota para listar todos os usuários do sistema
routes.get('/Listuser', userController.index);

//Rota para deletar um usuário específico do sistema
routes.delete('/deleteUser/:userCPF', userController.delete);

//Rota para selecionar um usuário específico
routes.get('/selectUser/:userCPF', userController.selectUser);

module.exports = routes;


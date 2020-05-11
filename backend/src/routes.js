const express = require('express');
const routes = express.Router();

routes.get('/', (req,res)=> {
    return res.json('Joao é lindo');
});

module.exports = routes;

const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();


routes.get('/', (req,res)=> {
    return res.json('Souzão é lindo');
});

routes.get('/productList', async(req,res) => {
    const products = await connection('product').select('*');

    return res.json(products);
});

routes.post('/product', async(req,res) => {
    const { 
    name, 
    shelfLife, 
    location, 
    type, 
    lastBuyDate, 
    lastBuyPrice, 
    amount, 
    allertAmount} = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('product').insert({
        id,
        name, 
        shelfLife, 
        location, 
        type, 
        lastBuyDate, 
        lastBuyPrice, 
        amount, 
        allertAmount
    });

    return res.json({ id });
});

module.exports = routes;

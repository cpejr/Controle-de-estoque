const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(req, res){
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
    },

    async index(req, res){
        const products = await connection('product').select('*');

        return res.json(products);
    },

    async delete(req, res){
        
    },
};
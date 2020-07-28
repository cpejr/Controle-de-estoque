const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(req, res){
        const productList = await connection('productList').select('*');

        return res.json(productList);
    },

    async create(req, res){
        const { 
            productName,
            productType,
            } = req.body;
            
            console.log(productName, productType);
        
            const productID = crypto.randomBytes(4).toString('HEX');
        
            await connection('productList').insert({
                productID,
                productName,
                productType
            });

        return res.json({ productID });
    },

    async delete(req, res){
        const {productID} = req.params;

        const product = await connection('productList')
        .where('productID', productID)
        .select('productID')
        .first();

        await connection('productList').where('productID', productID).delete();

        return res.status(204).send();//Status de sucesso
    },

    async search(req, res){
        const {productID} = req.params;
        console.log(productID);
        const product = await connection('productList')
        .where('productID', productID)
        .select('productID', 'productName', 'productType');

        return res.json(product);
    },

};


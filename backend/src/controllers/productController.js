

const products = require('../models/products')

module.exports = {
    async create(req, res){
        const newProduct = { 
            name: req.body.name,
            location: req.body.location, 
            type: req.body.type, 
            lastBuyDate: req.body.lastBuyDate, 
            lastBuyPrice: req.body.lastBuyPrice, 
            amount: req.body.amount, 
            allertAmount: req.body.allertAmount,
            description: req.body.description
        }

        try{
            const response = await products.createNew(newProduct)
            return res.json( response );
        }
        catch (error){
            res.status(500).json({ error: error });
        }

    },

    async index(req, res){
        try {
            const allProducts = await products.getAll()
            return res.json(allProducts);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    },

    async delete(req, res){
        const id = req.body.id;

        try{
            const result = await products.deleteOne(id)
            return res.json(result)
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    },

    async editProduct(req, res){

        const id = req.body.id

        const newFields = req.body.newFields

        try{
            const response = await products.update(id, newFields)
            return res.json(response)
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    },

};
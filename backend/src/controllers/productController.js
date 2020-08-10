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

        const response = await products.createNew(newProduct)

        return res.json( response );
    },

    async index(req, res){
        const allProducts = await products.getAll()

        return res.json(allProducts);
    },

    async delete(req, res){
        const {id} = req.params;
        // const userType = request.headers.authorization;

        const result = await products.deleteOne(id)

        return res.json(result)
    },

    async editProduct(req, res){

        const id = req.params.id

        const newFields = req.body

        const response = await products.update(id, newFields)
        
        return res.json(response)
    },
};
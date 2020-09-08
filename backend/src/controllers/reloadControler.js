const ReloadDB = require('../models/reload')
const ProductsDB = require('../models/products')

module.exports = {
    async createReload(req, res){
        try{
            const products = req.body.products
            products.forEach(async boughtProduct => {
                const product = await ProductsDB.findProduct(boughtProduct.id)
                await ProductsDB.update(product._id, {amount: product.amount+boughtProduct.amount})
            });
            const finalResponse = await ReloadDB.createNew(products)
            res.json(finalResponse)
        }
        catch(error){
            res.status(500).json({ error: error });
        }
    },

    async allReloads(req, res){
        try{
            const response = await ReloadDB.getAll()
            res.json({results: response})
        }
        catch(error){
            res.status(500).json({ error: error });
        }
    }
}
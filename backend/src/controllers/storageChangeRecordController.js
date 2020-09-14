const StorageChangeRecord = require('../models/storageChangeRecord')
const Products = require('../models/products')
const Users = require('../models/user')

module.exports = {
    //o que será criado e editado por nós. Especificos dessa edicao. 
    async retrieve(req, res) {
        try{
            const product = await Products.findProduct(req.body.productId)

            if (product.amount>=req.body.amount){
                const responseUpdate = await Products.update(product._id, {
                    amount: product.amount - req.body.amount
                });
        
                const newRecord = {
                    productId: product._id,
                    productName: product.name,
                    amountChanged: req.body.amount,
                    newAmount: product.amount - req.body.amount,
                    userId: req.body.userId,
                };
        
                const responseCreateNewRecord = await StorageChangeRecord.createNew(newRecord)
        
                res.status(200).json(responseCreateNewRecord)
            }
            else{
                res.status(500).json({ error: 'Não há essa quantidade de produtos em estoque' });
            }

        }
        catch(error){
            res.status(500).json({ error: error });
        }

    },

    // Metodo para listar todos as alterações no estoque
    async history(req, res) {
        try{
            const history = await StorageChangeRecord.getAll()
            return res.status(200).json({results: history});
        }
        catch(error){
            res.status(500).json({ error: error });
        }
    },

    async delete(req, res){
        try{
            const id = req.body.id;
            const response = await StorageChangeRecord.cancel(id);
            res.status(200).json(response)
        }
        catch(error){
            res.status(500).json({ error: error });
        }
        
    },

    async cancelledHistory(req, res){
        try{
            const response = await StorageChangeRecord.allCancelled();
            res.status(200).json(response)
        }
        catch(error){
            res.status(500).json({ error: error });
        }
    }

};

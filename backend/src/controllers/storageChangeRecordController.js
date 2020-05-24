const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const {
            // product_id,
            // product_name,
            // product_amount,
            // user_name,
            lastChanged_at
        } = req.body;
    
        await connection('storageChangeRecord').insert({
            // product_id,
            // product_name,
            // product_amount,
            // user_name,
            lastChanged_at
        });
        
        console.log("deu certo");
        return res.json({lastChanged_at});
    },

    async index(req,res){
        const storageChangeRecords = await connection('storageChangeRecord').select('*');

        return res.json(storageChangeRecords);
    },
      
};
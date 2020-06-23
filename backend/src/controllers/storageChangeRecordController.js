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

    async averageConsumption(req,res){
        const{
            product_id,
            date
        } = req.body;

        const sum = await connection('StorageChangeRecord')
        .sum('amount')
        .where('product_id', product_id)
        .andWhere('amount', '<', 0)
        .andWhere('date'.getDate(),'>',date.getDate());

        return res.status(204).send(sum);

    },
    

};
const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const {
            product_id,
            product_name,
            product_amount,
            user_name,
            lastChange_date
        } = req.body;
    
        await connection('storageChangeRecord').insert({
            product_id,
            product_name,
            product_amount,
            user_name,
            lastChange_date
        });
        
        console.log(product_id);
        return res.json({lastChange_date});
    },

    async index(req,res){
        const storageChangeRecords = await connection('storageChangeRecord').select('*');

        return res.json(storageChangeRecords);
    },

     async  get() {
        return Promise.reject('Oops!').catch(err => {
          throw new Error(err);
        });
      },
      
};
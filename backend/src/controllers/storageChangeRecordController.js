const connection = require('../database/connection');
const { from } = require('../database/connection');

module.exports = {
    //o que será criado e editado por nós. Especificos dessa edicao. 
    async create(req, res){
        
        const {
            user_name,
            amount_after
        } = req.body;
    
    //usaremos o id do produto para a autorizacao e para determinar o contexto da requisicao
        const product_id =req.headers.authorization;

        const date = new Date()
        const updated_at =  date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'_'+date.getHours()+':'+date.getMinutes();

        const product_name = knex.from('product').where({id, product_id}).select({product_id}).insert({id});
        const product_amount= knex.from('product').where({id, product_id}).select({amount_before}).insert({amount});

    //inserir nas colunas da table. Completar com resto
        const [change] = await connection('storageChangeRecord').insert({
            amount_after,
            updated_at,
            product_id,
            product_name,
            amount_before,
            user_name
        });
        return res.json({ change, updated_at });
    },


//     async index(req,res){
        

//         // import express from 'express';

//         const product= await knex('product').select('*');

//         const serialized= product.map(product => {
//         return {
//             product_id: product.id,
//             product_name: product.name,
//             product_amount: product.amount,
//         };
//         });
//         return response.json(serialized);
//     },


};

const connection = require('../database/connection');

module.exports = {
    //o que será criado e editado por nós. Especificos dessa edicao. 
    async create(req, res){
        const {
            amount_after,
        } = req.body;
    
    //usaremos o id do produto para a autorizacao e para determinar o contexto da requisicao
        const product_id =req.headers.authorization;
        const date = new Date()
        const updated_at =  date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'_'+date.getHours()+':'+date.getMinutes();
        const product_name = "carolinas";
        const product_amount=10;
        const user_name = "natalia";
    //inserir nas colunas da table. Completar com resto
        const [change] = await connection('storageChangeRecord').insert({
            amount_after,
            updated_at,
            product_id,
            product_name,
            product_amount,
            user_name
        });
        return res.json({ change, updated_at });
    },


    async index(req,res){
        
        // import knex from '../database/connection';
        // import express from 'express';

        const product= await knex('product').select('*');

        const serialized= product.map(product => {
        return {
            product_id: product.id,
            product_name: product.name,
            product_amount: product.amount,
        };
        });
        return response.json(serialized);
    },


};

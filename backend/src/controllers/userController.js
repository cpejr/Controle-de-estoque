const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const {
            userName,
            userType,
            userCPF,
            userDate,
            password
        } = req.body;
    
        await connection('userData').insert({
            userName,
            userType,
            userCPF,
            userDate,
            password
        });
        
        console.log(userName);
        return res.json({password});
    },

    async index(req,res){
        const users = await connection('userData').select('*');

        return res.json(users);
    },
};
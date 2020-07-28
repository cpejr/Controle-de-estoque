const connection = require('../database/connection');

module.exports = {

    async create(req,res){
        const { userCPF } = req.body;

        const user = await connection('userData')
        .where('userCPF', userCPF)
        .select('userName')
        .first();

        
        if(!user){
            return res.status(400).json({error: 'Usuário não encontrado'});
        }
        return res.json(user);
    },

    async logout(req,res){
        
    },

}
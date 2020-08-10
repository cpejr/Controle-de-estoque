const User = require('../models/user')

module.exports = {
    
    //Metodo para criar um usuário
    async create(req, res){

        const newUser = {
            firebaseId: req.body.firebaseId,
            userName: req.body.userName,
            userType: req.body.userType,
            userCPF: req.body.userCPF,
            userDate: req.body.userDate,
        };

        const response = await User.createNew(newUser)

        return res.json(response);

    },


    // Metodo para listar todos os usuários do sistema 
    async index(req,res){
        const users = await User.getAll()

        return res.json(users);
    },

    //Metodo para deletar um usuario especifico do sistema
    async delete(req,res){
        const id = req.body.id;
        
        const response = User.deleteOne(id)
    
        res.json(response)
    },
    
    async update(req,res){
        const id = req.body.id

        const newFields = req.body.newFields

        const response = await User.update(id, newFields)
        
        return res.json(response)
    },

    
};
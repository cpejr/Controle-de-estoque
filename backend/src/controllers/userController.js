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

        try{
            const response = await User.createNew(newUser)
            return res.json(response);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }

    },


    // Metodo para listar todos os usuários do sistema 
    async index(req,res){
        try{
            const users = await User.getAll()
            return res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    },

    //Metodo para deletar um usuario especifico do sistema
    async delete(req,res){
        const id = req.body.id;
        
        try{
            const response = User.deleteOne(id)
            res.json(response)
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    },
    
    async update(req,res){
        const id = req.body.id

        const newFields = req.body.newFields

        try{
            const response = await User.update(id, newFields)
            return res.json(response)
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    },

    
};
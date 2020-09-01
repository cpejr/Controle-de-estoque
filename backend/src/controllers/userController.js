const User = require('../models/user');
const FirebaseModel = require('../models/firebase');

module.exports = {
    
    //Metodo para criar um usuário
    async create(req, res){

        const newUser = {
            userName: req.body.userName,
            userType: req.body.userType,
            userCPF: req.body.userCPF,
            userDate: req.body.userDate,
        };

        try{
            const firebaseUid = await (await FirebaseModel.createNewUser(req.body.email, req.body.password)).user.uid;
            newUser.firebaseId = firebaseUid;
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
        
        try{
            const id = req.body.id;
            let responseFirebase;
            const user = await User.findUser(id);
            
         try{   
           responseFirebase = await FirebaseModel.deleteUser(user.firebaseId)
        } catch (error) {
            
            res.status(500).json({ error: error });
        }
            
            const deletedUser = await User.deleteOne(id)
            res.json(responseFirebase)
        }
        catch (error) {
            console.log(error)
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

    async changePassword(req, res){
        const id = req.body.id

        try {
            const user = User.findUser(id)
            const response = FirebaseModel.changeUserPassword(user.firebaseId, req.body.newPassword)
            return res.json(response)
        }
        catch(error){
            res.status(500).json({ error: error });
        }
    },

    async forgotPassword(req, res){
        const email = req.body.email;
        
        try {
            const response = FirebaseModel.forgot(email);
            return res.json(response);
        }
        catch(error){
            res.status(500).json({ error: error });
        }
    }

};





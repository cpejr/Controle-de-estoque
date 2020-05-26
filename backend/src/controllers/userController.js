const connection = require('../database/connection');

module.exports = {
    
    //Metodo para criar um usuário
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
        
       
        return res.json({userCPF});
    },

    // Metodo para listar todos os usuários do sistema 
    async index(req,res){
        const user = await connection('userData').select('*');

        return res.json(user);
    },

    //Metodo para deletar um usuario especifico do sistema
    async delete(req,res){
        const { userCPF } = req.params;
        const userCPF_Logado = req.headers.authorization;

        if(userCPF_Logado === "Adm"){
            const user = await connection('userData')
            .where('userCPF', userCPF)
            .select('userType')
            .first();

            if(user.userType == "Adm"){
                return res.status(401).json({error: "Operação invalida"});
            }
    
            await connection('userData').where('userCPF', userCPF).delete();
    
            return res.status(204).send();
    }

        if(userCPF_Logado === "Manager"){

            const user = await connection('userData')
            .where('userCPF',userCPF)
            .select('userType')
            .first();

             if(user.userType == "Adm" || user.userType == "Manager"){
                return res.status(401).json({error: "Operação invalida"});
            }

             await connection('userData').where('userCPF', userCPF).delete();
        
            
            return res.status(204).send();
         }

    if(userCPF_Logado === "Employee"){
        return res.status(401).json({error: "Operação invalida"});
    }

    },

    async selectUser(req,res){
        const { userCPF } = req.params
        const user = await connection('userData').where('userCPF',userCPF).select('*');
    

        return res.json(user);
    },

    
};
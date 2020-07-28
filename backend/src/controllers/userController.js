const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    
    //Metodo para criar um usuário
    async create(req, res){
    const userType_Logado = req.headers.authorization;

    

        if(userType_Logado == "Adm"){

        const id = crypto.randomBytes(4).toString('HEX');

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
            password,
            id
        });

        return res.json({id});
    }

    if(userType_Logado == "Manager"){

        const id = crypto.randomBytes(4).toString('HEX');
        
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
            password,
            id
        });

        if(userType == "Adm"){
            await connection('userData').where('userCPF', userCPF).select('*').first().delete();
            return res.status(401).json({error: "Permisão invalida"});
        }

        return res.json({id});
    }

    if(userType_Logado == "Employee"){

        const id = crypto.randomBytes(4).toString('HEX');

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
            password,
            id
        });

        if(userType == "Adm" ||userType == "Manager"){
            await connection('userData').where('id', id).select('*').first().delete();
            return res.status(401).json({error: "Permisão invalida"});
        }

        return res.json({id});
    }
        
       
    return res.status(401).json({error: "Operação falhou"});
    },

/////////////////////////////////////////////////////////////////////////////////////////

    // Metodo para listar todos os usuários do sistema 
    async index(req,res){
        const user = await connection('userData').select('userName','userType','userDate');

        return res.json(user);
    },

    ////////////////////////////////////////////////////////////////////////////////////

    //Metodo para deletar um usuario especifico do sistema
    async delete(req,res){
        const { id } = req.params;
        const userType_Logado = req.headers.authorization;
        const id_Logado = req.headers.authorization2;

        const user_id = await connection ('userData')
        .where('id', id)
        .select('id')
        .first();

        
        const user_Type = await connection('userData')
        .where('id', id)
        .select('userType')
        .first();

        
        
        //Deletar vc mesmo
        if(user_id.id== id_Logado ){
           
            await connection('userData').where('id', id).delete()
            return res.status(204).send();
        }

        


            // Manager e Employee não podem deletar Adm
            if((userType_Logado == "Manager" || userType_Logado == "Employee") && user_Type.userType == "Adm"){
                return res.status(401).json({error: "Operação invalida"});
            }


    
            //Adm excluir Manager e Employee
        if(userType_Logado === "Adm" && user_Type.userType == "Manager" || user_Type.userType == "Employee" ){
            
            await connection('userData').where('id',id).delete();
            return res.status(204).send();
        }

        
        //Manager excluir Employee
        if( userType_Logado == "Manager" && user_Type.userType == "Employee" ){
            
            await connection('userData').where('id',id).delete();
            return res.status(204).send();
        }

        

        if(userType_Logado === "Employee"){
            
            return res.status(401).json({error: "Operação invalida"});
        }
           
    return res.status(401).json({error: "Operação falhou"});
    
    },
    

    ///////////////////////////////////////////////////////////////////////////////////

    //Selecionar um usuario especifico
    async selectUser(req,res){
        const { id } = req.params
        const user = await connection('userData').where('id',id).select('userName','userType','userDate');
    

        return res.json(user);
    },

    
};
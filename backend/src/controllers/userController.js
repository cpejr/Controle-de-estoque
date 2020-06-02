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


//Metodo para editar o propio usuario
async editinfo(req,res){
    const {
        userName,
        userType,
        userDate,
        password
    } = req.body;

   console.log(        
        userName,
        userType,
        userDate,
        password)
    const userCPF_Logado = req.headers.authorization;


    const pass = await connection('userData')
    .where('userCPF', userCPF_Logado)
    .select('password')

    console.log(pass);

    const passS = `'${pass}'`;

    console.log(passS);

    const obj = JSON.parse(passS);

    console.log(obj);
    console.log(obj.password);

    if ( obj.password === pass){
        console.log("aaa");
        const user = await connection('userData')
        .where('userCPF', userCPF_Logado)
        .update({
            userName: userName,
            userType: userType,
            userDate: userDate,
        })

        return res.status(204).send(user);
}

},

async editpass(req,res){
    const {
        password,
        newpassword
    } = req.body;

    const userCPF_Logado = req.headers.authorization;

    const pass = await connection('userData')
    .where('userCPF', userCPF_Logado)
    .select('password')
    .first();

    console.log(pass);

    JSON.stringify(pass);

    console.log(pass);

    if(password === pass){
        const user = await connection('userData')
        .where('userCPF', userCPF_Logado)
        .update({
        password: newpassword
        })

        return res.status(204).send(user);
}

}

};




const connection = require('../database/connection');

module.exports = {
    // async create(req, res){
    //     const {
    //         userName,
    //         userType,
    //         userCPF,
    //         userDate,
    //         password
    //     } = req.body;
    
    //     await connection('userData').insert({
    //         userName,
    //         userType,
    //         userCPF,
    //         userDate,
    //         password
    //     });
        
    //     console.log(userName);
    //     return res.json({password});
    // },

    async index(req,res){
        const storage_change_record = await connection('storageChangeRecord').select('*');

        return res.json(storage_change_record);
    },
};
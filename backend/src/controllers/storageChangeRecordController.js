const connection = require('../database/connection');

module.exports = {
    //o que será criado e editado por nós. Especificos dessa edicao. 
    async create(req, res){
        
        const {
            product_id,
            changed
        } = req.body;
    
    //usaremos o id do produto para a autorizacao e para determinar o contexto da requisicao
        const user_name = req.headers.name;

        const date = new Date()
        const updated_at =  date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'_'+date.getHours()+':'+date.getMinutes();
        
        try{
             const product_name = await connection('product')
        .where('id', product_id)
        .select('name')
        .first();
       
        
        const name = product_name.name; 

        const amount = await connection('product')
        .where('id', product_id)
        .select('amount')
        .first();
        
        const newAmount = amount.amount + changed;

        if(newAmount>= 0 ){

            await connection('storageChangeRecord').insert({
                product_name: name,
                product_id,
                changed,
                updated_at,
                user_name,
                newAmount
            })

            await connection('product')
            .where('id',product_id)
            .update({
                amount: newAmount
            })

        
        return res.json({ updated_at, name, newAmount, user_name, product_id });
        }   

        else{
            return res.json("ERRO numero");
        }
    }
        
    catch(ERRO){
        return res.json("ERRO id");
    }
    
    },

    // Metodo para listar todos os usuários do sistema 
    async index(req,res){
        const history = await connection('storageChangeRecord').select('*');

        return res.json(history);
    },

};

const connection = require('../database/connection');

module.exports = {
    //o que será criado e editado por nós. Especificos dessa edicao. 
    async create(req, res) {
        const {
            product_id,
            changed,
            updated_at
        } = req.body;

        const userType_Logado = req.headers.authorization;
        //usaremos o id do produto para a autorizacao e para determinar o contexto da requisicao
        const user_name = req.headers.name;

        const date = new Date()
        console.log(date);
        //const updated_at = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

        if(userType_Logado == "Adm"||userType == "Manager"){
            try {

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

                if (newAmount >= 0) {

                    await connection('storageChangeRecord').insert({
                        product_name: name,
                        product_id,
                        changed,
                        updated_at,
                        user_name,
                        newAmount
                    })

                    await connection('product')
                        .where('id', product_id)
                        .update({
                            amount: newAmount
                        })


                    return res.json({ updated_at, name, newAmount, user_name, product_id });
                }

                else {
                    return res.json("ERRO numero");
                }
            }
            catch (ERRO) {
                return res.json("ERRO id");
            }

        }
        else {
            return res.status(401).json({error: "Usuário não autorizado para tal operação"});
        }
    },

    // Metodo para listar todos as alterações no estoque
    async index(req, res) {
        const history = await connection('storageChangeRecord').select('*');
       

        return res.json(history);
    },

    async averageConsumption(req, res) {
        const {
            product_id,
            date
        } = req.body;
        console.log(
            product_id,
            date
        );

        const info = await connection('StorageChangeRecord')
            .where('product_id', product_id)
            .andWhere('changed', '<', 0)
            .andWhere('updated_at', '>=', date)
            .select('product_name','changed','updated_at');

        const sum = await connection('StorageChangeRecord')
            .sum('changed')
            .where('product_id', product_id)
            .andWhere('changed', '<', 0)
            .andWhere('updated_at', '>=', date);
      
        console.log(sum);

        if (sum != null) {
            return res.status(200).json(info);
        }
        else {
            return res.status(401).json({ error: "Operação invalida" });
        }

    },

    async delete(req, res){
        const {
            id,
        } = req.body;
        const userType_Logado = req.headers.authorization;
        if(userType_Logado == "Adm"||userType == "Manager"){
            await connection('StorageChangeRecord').where('product_id', id).delete();
            return res.status(204).send();//Status de sucesso
        }
        else {
            return res.status(401).json({error: "Usuário não autorizado para tal operação"});
        }
    },

};

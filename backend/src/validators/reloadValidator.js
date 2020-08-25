const { Segments, Joi } = require('celebrate');

let reloadValidator = new Object();


reloadValidator.createReload = {

    [Segments.BODY]: Joi.object().keys({

        products: Joi.array().items(
            Joi.object().keys({
                id: Joi.string().required(),
                amount: Joi.number().integer().min(0).required(),
            })
        ).required()

    }),
        
}


module.exports = reloadValidator;      
const { Segments, Joi } = require('celebrate');

const productValidator = new Object();

productValidator.create = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        location: Joi.string().required(),
        type: Joi.string().required(),
        lastBuyDate: Joi.string().required(),
        lastBuyPrice: Joi.string().required(),
        amount: Joi.string().required(),
        allertAmount: Joi.string().required(),
        description: Joi.string().optional(),
    })
}

productValidator.delete = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}


productValidator.editProduct = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
        newFields: Joi.object().keys({
            name: Joi.string().optional(),
            location: Joi.string().optional(),
            type: Joi.string().optional(),
            lastBuyDate: Joi.string().optional(),
            lastBuyPrice: Joi.string().optional(),
            amount: Joi.string().optional(),
            allertAmount: Joi.string().optional(),
            description: Joi.string().optional(),
        })
    })
}

module.exports = productValidator;
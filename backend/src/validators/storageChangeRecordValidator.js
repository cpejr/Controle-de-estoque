const { Segments, Joi } = require('celebrate');

let storageChangeRecordValidator = new Object();


storageChangeRecordValidator.retrieve = {

    [Segments.BODY]: Joi.object().keys({
        userId: Joi.string().required(),
        amount: Joi.number().integer().max(0).required(),
        productId: Joi.string().required(),
    }),
        
}

storageChangeRecordValidator.delete = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.number().integer().min(0).required(),
    }),
}

module.exports = storageChangeRecordValidator;      
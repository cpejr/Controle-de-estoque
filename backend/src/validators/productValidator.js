const { Segments, Joi } = require('celebrate');

const classValidator = new Object();

classValidator.create = {
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

classValidator.delete = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}

classValidator.editProduct = {
    [Segments.BODY]: Joi.object().keys({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
        classId: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
        students: Joi.array().required(),
    })
}


module.exports = classValidator;
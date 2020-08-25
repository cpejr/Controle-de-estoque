const { Segments, Joi } = require('celebrate');
const userValidator = new Object();

userValidator.create = {
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
        userName: Joi.string().required(),
        userType: Joi.string().valid("manager", "adm", "employee").required(),
        userCPF: Joi.string().required(),
        userDate: Joi.date().required(),
    })
}

userValidator.delete = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}

userValidator.update = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
        newFields: Joi.object().keys({
            password: Joi.string().optional(),
            userName: Joi.string().optional(),
            userType: Joi.string().valid("manager", "adm", "employee").optional(),
            userCPF: Joi.string().optional(),
            userDate: Joi.date().optional(),
        })
    })
}

userValidator.changePassword = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
        newFields: Joi.object().keys({
            password: Joi.string().optional(),
            userName: Joi.string().optional(),
            userType: Joi.string().valid("manager", "adm", "employee").optional(),
            userCPF: Joi.string().optional(),
            userDate: Joi.date().optional(),
        })
    })
}

module.exports = userValidator;
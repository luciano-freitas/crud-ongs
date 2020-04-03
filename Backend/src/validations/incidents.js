const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {

    delete() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown(),
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            })
        })
    },

    index() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown(),
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number()
            })
        })
    },

    create() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown(),
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().required(),
                value: Joi.number().precision(10)
            })
        })
    }
};
const Joi = require('joi');

module.exportslistingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        deciption: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        country: Joi.string().allow("",null),
    }).required()
})

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),

    }).required()
})
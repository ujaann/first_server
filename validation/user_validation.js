const joi = require('joi');

const userSchema = joi.object({
    name: joi.string().required(),
    age: joi.number().integer().positive()
});


async function userValidation(req, res, next) {
    try {
        const { value, error } = await userSchema.validate(req.body);

        // console.log(value);
        if (error) {
            res.status(400).json(error);
        } else {
            next();
        }

    } catch (e) {
        res.status(500).json(e);
    }
}

module.exports = userValidation;
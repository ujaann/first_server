const User = require("../models/user")

const findAll = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.status(200).json(users);
    }
    catch (e) {
        res.json(e);
    }
}


const save = async (req, res) => {
    try {
        const user = new User(req.body);
        user.save();
        res.status(201).json(user);
    }
    catch (e) {
        res.json(e);
    }
}

module.exports = {findAll,save};
const User = require("../models/user")

const findAll = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.status(200).json(users);
    }
    catch (e) {
        res.status(500).json(e);
    }
}


const save = async (req, res) => {

    try {
        // console.log(req.body);
        const user = new User(req.body);
        const data=await user.save();
        res.status(201).json(data);
    }
    catch (e) {
        res.status(500).json(e);
    }
}


const update = async (req, res) => {
    try {
        const { params, body } = req;
        const userId = params.id;
        const user = await User.findById(userId);
        user.name = body.name;
        user.age = body.age;
        user.isNew = false;
        await user.save();
        res.status(201).json(user);
    } catch (e) {
        res.status(500).json(e);
    }
}

const getById=async (req,res) => {
    try{
        const {id}=req.params;
        const user=await User.findById(id);
        res.status(200).json(user);
    }catch(e){
        res.status(500).json(e);
    }
}

const deleteById=async function (req,res) {
    try{
        const {id}=req.params;
        const user=await User.findByIdAndDelete(id);
        res.status(200).json(user);
    }catch(e){
        res.status(500).json(e);
    }
}

module.exports = { findAll, save, update,getById ,deleteById};
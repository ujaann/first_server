const express=require('express');
const {findAll,save, update, getById, deleteById}= require('../controller/user_controller');
const userValidation = require('../validation/user_validation');
const router=express.Router();


router.get('/',findAll); 

router.post('/',userValidation,save);

router.put('/:id',update);

router.get('/:id',getById);

router.delete('/:id',deleteById);

module.exports=router;
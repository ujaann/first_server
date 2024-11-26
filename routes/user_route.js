const express=require('express');
const {findAll,save}= require('../controller/user_controller');
const router=express.Router();


router.get('/',findAll);

router.post('/',save);

module.exports=router;
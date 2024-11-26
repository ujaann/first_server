const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{required:true,type:String},
    age:Number
});


const User=mongoose.model("user",UserSchema);

module.exports=User;
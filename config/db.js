const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/db_my_first_server");
        console.log("Database connection established successfully!");
        
    }catch(e){
        console.log(e);
    }
}

module.exports=connectDB;
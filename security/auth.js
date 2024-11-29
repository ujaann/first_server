 const jwt=require('jsonwebtoken');

 function authorization(req,res,next) {
    try{
        const token=req.header("Authorization")?.split(" ")[1];
        if(!token){
            res.status(401).json({message:"UUnAuthorized"});
        }else{
            try{
                const verified =jwt.verify(token,"tkon");
                req.user=verified;
                next();
            }catch(e){
                res.status(400).json({message:"invalid token"});
            }
        }
    }catch(e){
        res.status(401).json({message:"Unauthorized"});
    }
 }
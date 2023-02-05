var jwt = require('jsonwebtoken');
const JWT_TOKEN="inotebook#@123"
const fetchuser=(req,res,next)=>{
    const token=req.header('token');
    if(!token){
        res.status(401).send({error:"Please authenticate using valid token"});
    }
    try {
        const data=jwt.verify(token,JWT_TOKEN);
        req.user=data;
        next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate using valid token"});
    }
}
module.exports=fetchuser;
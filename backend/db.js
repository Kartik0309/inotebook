const mongoose = require('mongoose');
const mongoUrl='mongodb://localhost:27017/inotebook';
const connectToMongo=()=>{
    mongoose.connect(mongoUrl,(err)=>{
        if(err) 
            console.log(err);
        else
            console.log('Database Connected');
    });
}
module.exports=connectToMongo;
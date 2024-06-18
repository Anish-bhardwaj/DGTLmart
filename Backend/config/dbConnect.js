const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected Succesfully");
    }catch(err){
        console.log("Error while connecting with database");
    }
}
module.exports= dbConnect;
const express= require('express');
const  dbConnect  = require('./config/dbConnect');
const router = require('./routes/route');
require('dotenv').config();
const app=express();
const cors=require('cors');
app.use(cors({
    origin:'*'
}));
app.use(express.json());
const port=process.env.PORT;
dbConnect();
app.use('/api/v1',router);
app.listen(port,()=>{
    console.log("App started at Port ",port);
})
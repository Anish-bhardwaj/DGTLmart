
const Item = require('../model/Item');
const searchItem=async (req,res)=>{
    try{
        const{input}=req.body;
        const query=new RegExp(input,"i");
        const items= await Item.find({
            "$or":[
                {"title":query},
                {"category":query}
            ]
        })
        res.status(200).json({
            message:"All Items",
            success:true,
            data:items
        });
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Error while Searching the items",
            data:err
        })
    }
}
module.exports=searchItem;
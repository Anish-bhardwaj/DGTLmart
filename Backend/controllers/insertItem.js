const Item = require("../model/Item");

const insertItem=async (req,res)=>{
    const{title,description,image,price,category}=req.body;
    try{
        if(!title|| !description|| !image||!price||!category){
            return res.status(400).json({
                success:false,
                message:"Insert the data completely",
            })
        }
            const savedItem=new Item({
                title,description,image,price,category
            });
            const item=await savedItem.save();
            return res.status(200).json({
                success:true,
                message:"Item inserted successfully"
            })
        
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Error while inserting the items",
            data:err
        })
    }
}
module.exports=insertItem;
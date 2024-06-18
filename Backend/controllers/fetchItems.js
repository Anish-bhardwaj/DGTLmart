
const Item = require('../model/Item');
const fetchItems=async(req,res)=>{
    try{
        const items=await Item.find({});
        return res.status(200).json({
            success:true,
            message:"Data fetched Succesfuly",
            data:items
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Error while Fetching the items",
            data:err
        })
    }
}
module.exports=fetchItems;
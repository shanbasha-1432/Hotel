const itemdata=require('../models/itemschema')

const getitems = async (req,res) =>{

   try{

    const {category} = req.params
   
    const singleitemdetails = await itemdata.findOne({category})

    if(singleitemdetails){
    
    return res.status(200).json({message:"success",data:singleitemdetails})
    }

    return res.status(200).json({message:"item not found"})

   }
   catch(error){
    res.status(500).json({message:"error"})
   }
}
module.exports = getitems


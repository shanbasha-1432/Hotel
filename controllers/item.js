const item=require("../models/itemschema")

const itemuser=async(req,res)=>{
    try{

    const{category,name,price,image,itemId,}=req.body;

    const added=new item({

       category,
       name,
       price,
       image,
       itemId,
       
    });

    await added.save();
    res.status(201).json({message:'your itemadded successful',added})
}
    catch(error){
        console.error('error:',error)
        res.status(400).json({message:'error ',error:error.message})
    }
}

module.exports=itemuser;
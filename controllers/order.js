const Order=require('../models/orderschema');
const createOrder=async(req,res)=>{
    try{
        const{items:name,price,quantity}=req.body;
        const order=new Order({items:name,price,quantity})

        await order.save();
        res.status(201).json({message:'order places successfully',order});
    }
      
            catch (error) {
                res.status(400).json({ message: 'order not placed.please try again', error})
            }
   
            

        };
   module.exports=createOrder;



const Order=require('../models/orderschema');
const createOrder=async(req,res)=>{
 try{
         
         const{userid}=req.body;
         const{orderdetails}=req.body;
         const{status}=req.body;
         const Orderr = await Order.findOne({userid});
  
    if(Orderr){
      Orderr.orderdetails.push(...orderdetails);
      await Orderr.save();
      res.status(200).json({message:'Order updated successfully',Orderr});
    } 
    else {
      const order = new Order({userid,orderdetails,status});
      await order.save();
      res.status(201).json({message:'Order created successfully',order});
    }
  } 
  catch(error){
    res.status(400).json({message:'order not placed',error});
  }};
  module.exports=createOrder;
const Order=require('../models/orderschema');

const getOrders = async (req,res) => {
  const {userid}=req.params;

 
      try {
       
        const orders= await Order.findOne({userid});
        
        res.status(201).json({ message: 'Orders retrieved successfully!', orders });
      } catch (err) {
        res.status(500).send({ message: 'Failed to retrieve orders.' });
      }
    };
    module.exports=getOrders;
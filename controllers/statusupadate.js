const Order = require('../models/orderschema')

const Update = async(req,res)=>{
    const {userid,name}=req.params;
    const orders= await Order.findOne({userid});
    try{
    orders.orderdetails.forEach(item => {
       
        if( item.name === name) {
            if(item.status === "PENDING"){
                item.status="PROCESSING"
            }
            else{
                item.status="COMPLETED"
            }
        }
    });
     await orders.save()
     res.status(201).json({ message: 'STATUS UPDATED', orders });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }

}

module.exports=Update;
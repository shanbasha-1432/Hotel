const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userid: {
       type: String, 
       required: true 
      },

      orderdetails: [
          {
            name: { type: String, 
              required: true
             },
            price: { type: Number,
               required: true 
              },
            quantity: { type: Number, 
              required: true 
            },
            status: { 
              type: String, 
              required: true, 
              enum: ['PENDING', 'PROCESSING','COMPLETED'], 
              default: 'PENDING' 
            }
          
          }
],
});
  const Order = mongoose.model('Order',OrderSchema);
  module.exports=Order;
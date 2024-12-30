const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    items: [{
        name: {
            type:String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        quantity:{
            type: Number,
            required: true
        }
    }],
});
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
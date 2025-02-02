const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    items: [{
        itemId: {
            type:String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        quantity:{
            type: Number,
            required: true,
        },
        subtotal:{
            type:Number,
            required:true,
        },
    }],
    totalPrice:{
        type:Number,
        required:true,
    },
    totalQuantity:{
        type:Number,
        required:true,
    },

});

module.exports = mongoose.model('CartItem', cartSchema);


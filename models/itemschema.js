const mongoose=require("mongoose")

const itemschema=new mongoose.Schema({

    category:{
        type:String,
        required:true,
    },

    name:{
        type:String,
        required:true,
    },

    price:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        required:true,
    },

    itemId:{
        type:Number,
        required:true,
    },

})
module.exports=mongoose.model('item',itemschema)
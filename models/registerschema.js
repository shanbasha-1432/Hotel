const mongoose =require('mongoose');

const registerSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})
module.exports=mongoose.model('userdetails',registerSchema)
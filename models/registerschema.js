const mongoose =require('mongoose');
const {v4 : uuidv4} =require('uuid');

const registerSchema =new mongoose.Schema({
    userId:{
        type:String,
        default:uuidv4,
        required:true,
    },
    
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
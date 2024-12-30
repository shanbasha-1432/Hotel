const mongoose =require('mongoose');

const bookingSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    additionalnotes:{
        type:String,
        required:true,
    },
    persons:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('booking',bookingSchema)
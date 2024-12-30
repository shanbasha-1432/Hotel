const Booking = require('../models/bookingschema')


const createBooking = async(req,res)=>{
     try{
    
    const{name,email,phonenumber,date,additionalnotes,persons}=req.body;

    const booking = new Booking({
        name,
        email,
        phonenumber,
        date,
        additionalnotes,
        persons

    });
    await booking.save();
    res.status(201).json({message:'your booking successful',booking})
 }
  catch(error){
    console.error('error booking:',error)
    res.status(400).json({message:'error booking',error:error.message});
  }  
}
module.exports={createBooking};
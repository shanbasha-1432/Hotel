const Register = require('../models/registerschema')
const bcrypt =require('bcryptjs');


const createUser=async(req,res)=>{

    const{name,phonenumber,email,password}=req.body;
        try{
    const saltRounds=10;
    const hashedPassword=await bcrypt.hash(password,saltRounds);
            
    const register = new Register({

        name,
        phonenumber,
        email,
        password:hashedPassword
    })
    await register.save();
    res.status(201).json({message:'register created successfully',register});
}
    catch(error){
        console.error('error register user:',error)
        res.status(400).json({message:'error register user',error:error.message})
    }
}
module.exports={createUser}
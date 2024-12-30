// const login=require('../models/loginschema')
const registerschema=require('../models/registerschema')
const bcrypt=require('bcryptjs');


const login=async(req,res)=>{
    try{
    const{email,password}=req.body;
    const logindata=await registerschema.findOne({email});

    if(!logindata || !(await bcrypt.compare(password,logindata.password))){
        return res.status(400).json({message:'invalid email or password'});
    }
    else{
        res.status(201).json({message:'login successfully'})
    }

    }
    catch(error){
        console.error('login failed',error)
        res.status(500).json({message:'login failed',error:error.message})
    }

}
module.exports={login}
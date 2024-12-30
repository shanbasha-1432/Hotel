const express =require('express')

const{login}=require('../controllers/login')

const router=express.Router();


router.post('/signin',login)

module.exports=router;
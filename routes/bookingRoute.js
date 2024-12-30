const express = require('express');
const{createBooking}=require('../controllers/booking')
const router=express.Router();

router.post('/booked',createBooking);

module.exports=router;
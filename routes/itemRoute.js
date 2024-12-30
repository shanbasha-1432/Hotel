
const express=require("express")

const itemuser =require("../controllers/item")

const getitems =require('../controllers/getitems')

const router=express.Router()

router.post('/item',itemuser)

router.get('/getallitems/:category',getitems)

module.exports=router


const express=require("express")

const itemuser =require("../controllers/item")

const getitems =require('../controllers/getitems')

const itemschema =require('../controllers/itemget')

const searchuser = require("../controllers/searchcontroller")

const router=express.Router()

router.post('/item',itemuser)

router.get('/getallitems/:category',getitems)

router.get('/allgetitems/:category',itemschema)

router.post('/search',searchuser)

module.exports=router

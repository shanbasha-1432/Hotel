const addCartItem = require('../controllers/addtocart');
const showcart = require('../controllers/showcart');
const increasequantity = require('../controllers/increasequantity');
const decreasequantity = require('../controllers/decreasequantity');
const removefromcart = require('../controllers/removefromcart'); 
const clearcart = require('../controllers/clearcart');
const express = require('express');
const router = express.Router();

router.post('/add',addCartItem);
router.post('/show/:userId',showcart);
router.post('/increase/:userId/:itemId',increasequantity);
router.post('/decrease/:userId/:itemId',decreasequantity);
router.post('/remove/:userId/:itemId',removefromcart);
router.post('/clear/:userId',clearcart);

module.exports = router;
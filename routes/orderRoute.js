
const express=require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const get=require('../controllers/getorder');

router.post('/postorder', orderController);
router.get('/getorder', get);

module.exports = router;

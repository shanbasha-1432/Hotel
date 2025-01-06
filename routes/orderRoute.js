
const express=require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const get=require('../controllers/getorder');
const update=require('../controllers/statusupadate')

router.post('/postorder', orderController);
router.get('/getorder', get);
router.post('/update/:userid/:name',update)
module.exports = router;

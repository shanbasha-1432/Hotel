const cartSchema = require('../models/cartschemamain');

const increasequantity = async (req, res) => {
    const { itemId,userId } = req.params;
    try {
        const cart = await cartSchema.findOne({ userId });
        // const item = await cart.items.itemId.find({itemId,userId})
        const item = cart.items.find((item) => item.itemId.toString() === itemId);
        item.quantity += 1;
        item.subtotal=item.price*item.quantity;
        cart.totalPrice = item.subtotal;
        cart.totalQuantity = item.quantity;
        await cart.save();
        res.status(200).json({ message: 'Item quantity increased',cart });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }
}


module.exports = increasequantity;
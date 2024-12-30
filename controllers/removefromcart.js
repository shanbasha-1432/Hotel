const cartSchema = require('../models/cartschemamain');

const removefromcart = async (req, res) => {
    const { itemId,userId } = req.params;
    try {
        const cart = await cartSchema.findOne({ userId });
                       // const item = await cart.items.itemId.find({itemId,userId})
                       const item = cart.items.find((item) => item.itemId.toString() === itemId);
                       await cart.deleteOne({item})
        res.status(200).json({ message: 'Item removed from cart',cart });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }
}

module.exports = removefromcart;
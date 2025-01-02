const cartSchema = require('../models/cartschemamain');

const removefromcart = async (req, res) => {
    const { itemId,userId } = req.params;
    try {
        const cart = await cartSchema.findOne({ userId });
                       // const item = await cart.items.itemId.find({itemId,userId})
                       const item = cart.items.find((item) => item.itemId.toString() === itemId);
                       cart.items.pull(item)
                    //    await cart.deleteOne({item})
        cart.totalPrice = 0;
        cart.totalQuantity = 0;
        cart.items.forEach(item => {
            cart.totalPrice += item.subtotal;
            cart.totalQuantity += item.quantity;
        });
        if(cart.items.length === 0) {
            await cart.deleteOne();
            return res.status(200).json({message:'cart cleared'});
        }

        await cart.save();             
        res.status(200).json({ message: 'Item removed from cart',cart });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }
}

module.exports = removefromcart;
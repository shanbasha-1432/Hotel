const cartSchema = require('../models/cartschemamain');

const decreasequantity = async (req, res) => {
    const { itemId,userId } = req.params;
    try {
        const cart = await cartSchema.findOne({ userId });
                // const item = await cart.items.itemId.find({itemId,userId})
                const item = cart.items.find((item) => item.itemId.toString() === itemId);
                item.quantity -= 1;
                item.subtotal=item.price*item.quantity;

                cart.totalPrice = 0;
                cart.totalQuantity = 0;
                cart.items.forEach(item => {
                    cart.totalPrice += item.subtotal;
                    cart.totalQuantity += item.quantity;
                });
        
        if (item.quantity === 0) {
            // await cartSchema.deleteOne({ itemId: req.params.itemId });
            await cart.deleteOne({item})
            return res.status(200).json({ message: 'Item removed from cart' });
        }
        await cart.save();
        res.status(200).json({ message: 'Item quantity decreased', cart });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }
}




module.exports = decreasequantity;
const cartSchema = require('../models/cartschemamain');

const clearcart = async (req, res) => {
    const {userId } = req.params;
    try {
         const cart = await cartSchema.findOne({ userId });
        // await cartSchema.deleteMany(cart);
        await cartSchema.deleteMany(cart)
        res.status(200).json({ message: 'Cart cleared',cart });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }
}


module.exports = clearcart;
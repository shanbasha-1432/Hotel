const CartSchema = require('../models/cartschemamain');

const showcart = async (req, res) => {
     const {userId } = req.params;
        try {
             const cart = await CartSchema.findOne({ userId });
        if (!cart || cart.length === 0) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = showcart;
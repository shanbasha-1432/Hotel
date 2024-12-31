const CartSchema = require('../models/cartschemamain');

const cartdata = async (req, res) => {
    const { userId, items: [{ itemId, price, quantity }] } = req.body;

    const subtotal = price * quantity;

    try {
        
        let cart = await CartSchema.findOne({ userId });

        if (cart) {           

            const existingItem = cart.items.find(item => item.itemId === itemId);

            if (existingItem) {

                existingItem.quantity += 1;
                // existingItem.subtotal += subtotal;
                existingItem.subtotal=existingItem.quantity*price;

            } else {

                 cart.items.push({ itemId, price, quantity,subtotal });
            }
          
            cart.totalPrice = 0;
            cart.totalQuantity = 0;
            cart.items.forEach(item => {
                cart.totalPrice += item.subtotal;
                cart.totalQuantity += item.quantity;
            });
            // cart.totalPrice += subtotal;
            // cart.totalPrice = existingItem.subtotal;
            // cart.totalQuantity = existingItem.quantity;
            
        } else {
            
            cart = new CartSchema({
                userId,
                items: [{
                    itemId,
                    price,
                    quantity,
                    subtotal
                }],
                totalPrice: price * quantity,
                totalQuantity: quantity
            });
        }

        
        await cart.save();
        res.status(201).json({ message: 'Item added to cart', cart });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }
};

module.exports = cartdata;
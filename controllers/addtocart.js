// const CartSchema = require('../models/cartschemamain');


// const cartdata = async (req, res) => {
//     try {
       
//         const {userId,items:[{itemId,price,quantity}], } = req.body;
//         // const { userId, items } = req.body;
//         cart = new CartSchema({

//             // userId,
//             //     items: items.map(item => ({
//             //         itemId: item.itemId,
//             //         price: item.price,
//             //         quantity: item.quantity,
//             //         subtotal: item.price * item.quantity, 
//             //     })),
//             //     totalPrice: items.reduce((total, item) => total + item.price * item.quantity, 0),
//             //     totalQuantity: items.reduce((quantity, item) => quantity + item.quantity, 0),

//             userId,
//             items:[{itemId,
//                 price,
//                 quantity,
//                 subtotal:price*quantity}],
//             totalPrice:price*quantity,
//             totalQuantity:quantity   
            
//         });
       
//             await cart.save();
//             res.status(201).json({ message: 'Item added to cart', cart });
//         } catch (error) {
//             res.status(500).json({ message: 'Error processing request', error });
//         }
//     }
// module.exports =  cartdata ;


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


            // cart.totalPrice += subtotal;
            cart.totalPrice = existingItem.subtotal;
            cart.totalQuantity = existingItem.quantity;
            
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

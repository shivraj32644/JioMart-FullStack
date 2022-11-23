import Cart from '../Models/cart.model';

export const getCart= async(req,res) => {
    try {
        const products = await Cart.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}    

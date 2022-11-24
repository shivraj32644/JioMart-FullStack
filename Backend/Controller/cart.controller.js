import Cart from '../Models/cart.model.js';


export const getCart= async(req,res) => {
    try {
        const products = await Cart.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}    


export const postCart = async(req,res)=>{

    try {
         console.log(req.body);
        
           const carts = new Cart(req.body);
           const data = await carts.save();
          
           return res.status(201).send({
               message : 'successfully registered',
              carts : data
            })
          
    } 
    catch (error) {
        return res.status(500).send({
            message : error
})
}
}
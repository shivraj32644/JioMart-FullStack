import Cart from '../Models/cart.model.js';


export const getCart= async(req,res) => {
    console.log("products");
    try {
        const products = await Cart.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:"staltla"});
    }
}    


export const postCart = async(req,res)=>{
    console.log("postCart");
    try {
         console.log(req.body);
        
           const carts = new Cart(req.body);
           const data = await carts.save();
          
           return res.status(201).send({
               message : 'Successfully Added',
              carts : data
            })
          
    } 
    catch (error) {
        return res.status(500).send({
            message : error
        })
    }
}


export const incCart = async(req,res)=>{
    console.log("incCart");
    try {
        let id = req.params.id;
        // let temp = req.params._id
        // console.log(temp,id)
         let cart = await Cart.findById(id)
        // const cart = await Cart.find({"_id" : id});
        // console.log('Cart: ',cart);
        let {item_quantity} = cart;
        console.log('item_quantity: ',item_quantity);

         const newQuantity = item_quantity+1
       
        console.log(newQuantity);
        // console.log(cart)
          await Cart.findByIdAndUpdate(req.params.id,{
             $set:{ item_quantity : newQuantity }                 
          })
          
           return res.status(201).send({
               message : 'successfully incremented',
              carts : cart
            })
          
    } 
    catch (error) {
        return res.status(500).send({
            message : error
        })
    }
}

export const decCart = async(req,res)=>{
    console.log("decCart");
    try {
        const id = req.params.id;
         console.log(req.params.id);
        const cart = await Cart.findById({_id:id});
        let {item_quantity} = cart;
console.log(item_quantity);
         const products = await Cart.findByIdAndUpdate({_id : id},
            { $set:
                {
                  item_quantity : item_quantity-1
                 }
             })
          
          
           return res.status(201).send({
               message : 'successfully decremented',
              carts : products
            })
          
    } 
    catch (error) {
        return res.status(500).send({
            message : error
        })
    }
}

export const delCart = async(req,res)=>{
    console.log("delCart");

    try {
        const id = req.params.id;
         console.log(req.params.id);
        const cart = await Cart.findByIdAndDelete({_id:id});
          
           return res.status(201).send({
               message : 'successfully deleted',
               carts : cart
            })
          
    } 
    catch (error) {
        return res.status(500).send({
            message : error
        })
    }
}





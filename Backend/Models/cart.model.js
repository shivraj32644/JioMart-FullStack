import mongoose from 'mongoose';
const cartSchema = new mongoose.Schema({
    item_name : String,
    item_img_url : String,
    item_final_price : String,
    item_price : String,
    item_discount : String,
    item_tag_name : String,
    item_disc_price : String,
    item_quantity : String
});

const cartModel =  mongoose.Model('Cart',cartSchema);
export default cartModel;
import mongoose from 'mongoose';
const cartSchema = new mongoose.Schema({
    item_name : String,
    item_img_url : String,
    item_final_price : Number,
    item_price : Number,
    item_discount : String,
    item_tag_name : String,
    item_disc_price : Number,
    item_quantity: Number,
    "item_Id":String,
    user_Id : {type : String, required : true}
},
{
    timestamps:true,
    versionKey:false
}

);

const cartModel =  mongoose.model("Cart",cartSchema);

export default cartModel;
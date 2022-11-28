import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  item_name: { type: String,required:false },
  item_img_url: { type: String ,required:false},
  item_other_img_url: [String],
  item_final_price: { type: Number,required:false },
  item_price: { type: Number,required:false },
  item_discount: { required:false},
  item_tag_name: { type: String,required:false },
  item_disc_price: { type: Number,required:false },
  item_stock: { type: Boolean ,required:false},
  item_like: { type: Boolean,required:false },
  item_star: { type: Number ,required:false},
  item_quantity: { type: Number ,required:false},
  text_veg: { type: Boolean ,required:false},
  item_category: { type: String ,required:false},
  item_addtocart: { type: Boolean ,required:false},
});
export const productModel = mongoose.model("products", productSchema);

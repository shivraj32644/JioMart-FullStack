import mongoose from "mongoose";

const productSchema = new mongoose.Schema({


});
export const productModel = mongoose.model("products", productSchema);




/*


  item_name: { type: String },
  item_img_url: { type: String },
  item_other_img_url: [String],
  item_final_price: { type: Number },
  item_price: { type: Number },
  item_discount: { type: Boolean },
  item_tag_name: { type: String },
  item_disc_price: { type: Number },
  item_stock: { type: Boolean },
  item_like: { type: Boolean },
  item_star: { type: Number },
  item_quantity: { type: Number },
  text_veg: { type: Boolean },
  item_category: { type: String },
  id:{type:Number},
  item_addtocart: { type: Boolean }

*/
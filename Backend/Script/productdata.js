import { connectDataBase } from "../configs/db.connect.js";
import { productModel } from "../Models/product.model.js";

const productArr = [
  {
    item_name:
      "Saffola Gold Refined Rice Bran And Sunflower Based Blended Oil 3 L + Daawat Devaaya Basmati Rice 5 kg (Combo Pack)",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-0-20220624.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-0-20220624.jpg",
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-1-20220624.jpg",
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-13-20220624.jpg",
      "https://www.jiomart.com/images/product/150x150/592200116/saffola-gold-refined-rice-bran-and-sunflower-based-blended-oil-3-l-daawat-devaaya-basmati-rice-5-kg-combo-pack-14-20220624.jpg",
    ],
    item_final_price: 915,
    item_price: 1310,
    item_discount: true,
    item_tag_name: "Trending",
    item_disc_price: 395,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
    id: 1,
    item_category: "Top_Deals",
    item_addtocart: false,
  },
  {
    item_name: "Tur / Arhar Dal 2 kg",
    item_img_url:
      "https://www.jiomart.com/images/product/600x600/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-0-202203170610.jpg",
    item_other_img_url: [
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-0-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-1-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-2-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-legal-images-o491417390-p491417390-3-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-legal-images-o491417390-p491417390-4-202203170610.jpg",
      "https://www.jiomart.com/images/product/150x150/491417390/tur-arhar-dal-2-kg-legal-images-o491417390-p491417390-5-202203170610.jpg",
    ],
    item_final_price: 210,
    item_price: 270,
    item_discount: true,
    item_tag_name: "Trending",
    item_disc_price: 60,
    item_stock: true,
    item_like: false,
    item_star: 0,
    item_quantity: 0,
    text_veg: true,
    id: 2,
    item_category: "Top_Deals",
    item_addtocart: false,
  },
  
];
{
  
}

export async function addData() {
  await connectDataBase();
  try {
    // const result = await productModel.find().lean().exec();
    await productModel.insertMany(productArr);
    // console.log(result);
    
  } catch (error) {
    console.log(error)
  }
} 



addData();
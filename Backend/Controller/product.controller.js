import { productModel } from "../Models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    let data = await productModel.find();
    const length = await productModel.find().count();
    let page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || length;
    const search = req.query.q || "";
    let sort = req.query.sort || "";
    let order = req.query.order || "";
    let filter = req.query || {};
    delete filter.sort;
    delete filter.limit;
    delete filter.q;
    delete filter.page;
    delete filter.order;
    
    // console.log(filter);
    // var allKeys = Object.keys(filter)
    // console.log("All Keys", allKeys[0].split("$"))
    // console.log("All Keys", allKeys[1].split("$"))
    
    // if (allKeys.includes("lte") && allKeys.includes("gte")) {
      
      
    //   const key = allKeys[0]
    //   filter = { [key]: {  $gte: 2000, $lte: 4000 } }
    // }
    // else {
      
    // }
    // if()
     
    let sortBy = {};
    if (order === "asc") {
      sortBy[sort] = 1;
    } else if (order === "desc") {
      sortBy[sort] = -1;
    }

    data = await productModel.find({ ...filter, item_name: { $regex: search, $options: "i" } })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);
      return res.status(200).send(data);


  } catch (error) {
    return res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

export const addProduct = async (req, res) => {};

/*

user = [
    {
        _id: akshansh
        cartItem:[item1,item2item3]
    },
    {
    _id:shivraj
    },
    {
    _id:abhi
    },
    {
    _id:jay
    },
]

// ===============================================
1
let user = user.find()

user.cartItem

let newItem = "";

user.cartItem.push(newItem);

// ==================================
2
cart = [
    {
        cartDetail: "same",
        userId:akshansh
    },
    {
        cartDetail: "same",
        userId:shivraj
    },
    {
        cartDetail: "item2",
        userId:akshansh
    },
    {
        cartDetail: "",
        userId:jay
    },
    {
        cartDetail: "",
        userId:abhi
    },
    {

    },


]

cartModel.find({ userID: akshansh })

=> 3














    // if (q) {
    //     console.log(q);
    //     productModel.createIndexes({ item_category: 'text' }, (err) => {
    //         console.log(err)
    //     })

    //     data = await productModel.find({ $text: { $search: q }  })
    //     console.log(data);

    //     // productModel.createIndexes({title:"text"})
    //     //      data = await productModel.find({ $text: { $search: q } })

    //     // ! db.blogs.createIndex({ title: 'text', content: 'text' })
    //     // ! db.blogs.find({ $text: { $search: 'mongodb intro' }  })

    // }



*/

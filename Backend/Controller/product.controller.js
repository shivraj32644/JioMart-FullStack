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

    // var allKeys = Object.keys(filter)
    // console.log("All Keys", allKeys[0].split("$"))
    // console.log("All Keys", allKeys[1].split("$"))
    // console.log(allKeys);

    // if (true) {

    //   const key = allKeys[0]
    // }
    // else {
        
    // }
    // filter = { item_price: {  $gte: 2000, $lte: 4000 } }
    
    let sortBy = {};
    if (order === "asc") {
        sortBy[sort] = 1;
    } else if (order === "desc") {
        sortBy[sort] = -1;
    }

    data = await productModel
      .find({ ...filter, item_name: { $regex: search, $options: "i" } })
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

export const getProductById = async (req, res) => {
  try {
    let data = await productModel.findById(req.params.id);
    res.send(data);
  } catch (error) {
    return res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

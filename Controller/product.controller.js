import { productModel } from "../Models/product.model.js";

export const getProducts = async (req, res) => {
  console.log("In product Route");
  try {
    let data = await productModel.find();
    const length = await productModel.find().count();
    let page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || length;
    const search = req.query.q || "";
    let sort = req.query.sort || "";
    let order = req.query.order || "";
    let range = req.query.range || "";
    let lte = Number(req.query.lte) || 200000000;
    let gte = Number(req.query.gte) || 0;

    let filter = req.query || {};
    delete filter.sort;
    delete filter.limit;
    delete filter.q;
    delete filter.page;
    delete filter.order;
    delete filter.range;
    delete filter.lte;
    delete filter.gte;
    
    if (range.length > 0) {
      filter[range] = { $gte: gte, $lte: lte }
    }

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
  console.log("In product Route");

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

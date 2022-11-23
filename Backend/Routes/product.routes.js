import { Router } from "express";
import { addProduct, getProducts } from "../Controller/product.controller.js";

export const productRoute = Router();

productRoute.get("/", getProducts);
productRoute.post("/product",addProduct)

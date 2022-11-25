import { Router } from "express";
import { getProductById, getProducts } from "../Controller/product.controller.js";

export const productRoute = Router();

productRoute.get("/", getProducts);
productRoute.get("/:id", getProductById);

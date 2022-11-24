import express from 'express';
import {getCart,postCart } from '../Controller/cart.controller.js';

const router = express.Router();



router.get('/cart', getCart);
router.post('/addCart',postCart);


export default router;

import express from 'express';
import {getCart,postCart,decCart,incCart,delCart } from '../Controller/cart.controller.js';

const CartRouter = express.Router();



CartRouter.get('/Item', getCart);
CartRouter.post('/addCart',postCart);
CartRouter.patch('/incCart/:id',incCart);
CartRouter.patch('/decCart/:id',decCart);
CartRouter.delete('/delCart/:id',delCart);

export default CartRouter;

import express from 'express';
import {getCart,postCart,decCart,incCart,delCart, getOneItem, deleteAllItem } from '../Controller/cart.controller.js';

const CartRouter = express.Router();



CartRouter.get('/Item/:user_Id', getCart);
CartRouter.post('/addCart',postCart);
CartRouter.patch('/incCart/:id',incCart);
CartRouter.patch('/decCart/:id',decCart);
CartRouter.delete('/delCart/:id',delCart);
CartRouter.get('/Item/:id', getOneItem);
CartRouter.delete('/deleteall/:id',deleteAllItem);

export default CartRouter;

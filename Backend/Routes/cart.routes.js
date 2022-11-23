import express from 'express';
import {getCart } from '../Controller/cart.controller';

const router = express.Router();



router.get('/cart', getCart);



export default router;
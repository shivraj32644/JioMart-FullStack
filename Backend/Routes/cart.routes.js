import express from 'express';
import {getCart } from '../Controller/cart.controller';
import {userLogin,userSignup} from '../Controller/user.controller';
const router = express.Router();


router.post('/signup',userSignup);

router.post('/login',userLogin);

router.get('/cart', getCart);



export default router;

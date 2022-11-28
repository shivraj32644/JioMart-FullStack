import express from 'express'
import { connectDataBase } from './configs/db.connect.js';
import { AuthRouter } from './Middlewares/auth.middleware.js';
import cors from 'cors'
import { UserRouter } from './Routes/user.routes.js';
import { productRoute } from './Routes/product.routes.js';
import CartRouter from './Routes/cart.routes.js';
const port = process.env.PORT || 3020;
const app = express();
app.use(express.json());
app.use(cors())
app.use('/products',productRoute)
app.use('/auth',AuthRouter)
app.use('/user', UserRouter)
app.use('/cart',CartRouter)
app.get("*", (req, res) => {
    return res.send({
        message: "You Are not on Right Route",
        "Possible Routes": {
            "Product": "/products",
            "auth": "/auth",
            "user": "/user",
            "cart":"/cart"
        }
    })
})
app.listen(port, async() => {
    try {
        await connectDataBase();
        console.log(`Running on http://localhost:3020`);
    } catch (error) {
        console.log(error)
    }
})
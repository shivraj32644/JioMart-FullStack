import express from 'express'
import { connectDataBase } from './configs/db.connect.js';
import { productRoute } from './Routes/product.routes.js';
import { AuthRouter } from './Middlewares/auth.middleware.js';
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
app.use(productRoute);
app.use('/auth',AuthRouter)
app.listen(3020, async() => {
    try {
        await connectDataBase();
        console.log("localhost:3020")
    } catch (error) {
        console.log(error)
    }
})
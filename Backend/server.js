import express from 'express'
import { connectDataBase } from './configs/db.connect.js';
import { productRoute } from './Routes/product.routes.js';

const app = express();
app.use(productRoute);

app.listen(3020, async() => {
    try {
        await connectDataBase();
        console.log("localhost:3020")
    } catch (error) {
        console.log(error)
    }
})
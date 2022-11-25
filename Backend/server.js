import express from 'express'
import { connectDataBase } from './configs/db.connect.js';
import { AuthRouter } from './Middlewares/auth.middleware.js';
import cors from 'cors'
import { UserRouter } from './Routes/user.routes.js';
const app = express();
app.use(express.json());
app.use(cors())
app.use('/auth',AuthRouter)
app.use('/user',UserRouter)
app.listen(3020, async() => {
    try {
        await connectDataBase();
        console.log("localhost:3020")
    } catch (error) {
        console.log(error)
    }
})
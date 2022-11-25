import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config();

const username = process.env.mongoUserName;

const password = process.env.mongoPassword;
// console.log(username,password)
// console.log(username,password)
export const connectDataBase = async () => { 
        await mongoose.connect(`mongodb+srv://${username}:${password}@database.5lmxkzm.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Connected to MongoDB");
}
//mongodb+srv://<username>:<password>@cluster0.cewl226.mongodb.net/?retryWrites=true&w=majority
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config();

const username = process.env.mongoUserName;
const password = process.env.mongoPassword;
// console.log(username,password)
export const connectDataBase = async () => { 
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.mvnucve.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Connected to MongoDB");
}
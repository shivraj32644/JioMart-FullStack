import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config();

const username = process.env.mongoUserName;
const password = process.env.mongoPassword;



export const connectDataBase = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb://localhost:27017/jiomart`, (err) => {
            if (err) {
                reject("Database Connect Failed")
            }
            else {
                resolve();
            }
        })
    })
}



//! mongodb+srv://${username}:${password}@cluster0.cewl226.mongodb.net/?retryWrites=true&w=majority/jiomart
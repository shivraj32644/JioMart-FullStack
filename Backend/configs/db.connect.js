import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config();

// const username = "shiv";
// const password = "shiv32644";

export const connectDataBase = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb://localhost:27017/Cart`, (err) => {
            if (err) {
                reject("Database Connect Failed")
            }
            else {
                resolve();
            }
})
})
}
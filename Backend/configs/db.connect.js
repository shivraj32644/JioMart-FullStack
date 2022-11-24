import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config();

const username ="shiv"
const password = "shiv32644";

export const connectDataBase = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.cewl226.mongodb.net/?retryWrites=true&w=majority`, (err) => {
            if (err) {
                reject("Database Connect Failed")
            }
            else {
                resolve();
            }
        })
    })
}
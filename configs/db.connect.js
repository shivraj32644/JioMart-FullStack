import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config();

const username = "shivraj"
const password ="shivraj"


export const connectDataBase = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb+srv://${username}:${password}@database.5lmxkzm.mongodb.net/?retryWrites=true&w=majority`, (err) => {
            if (err) {
                reject("Database Connect Failed")
            }
            else {
                console.log("Connection Success")
                resolve();
            }
        })
    })
}



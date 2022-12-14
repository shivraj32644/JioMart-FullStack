import { Router} from "express";
import { User } from "../Models/users.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {randomInt} from 'crypto'
dotenv.config({
    path : './.env'
})

const JWT_SECRET =  process.env.JWT_SECRET_KEY
export const AuthRouter = Router()


AuthRouter.post('/Signup',async(req,res)=>{
    try {
        const user = req.body;
        let {First_Name,Last_Name,Email,password,Mobile_Number} = user;
        let alreadyexist = await User.findOne({Mobile_Number: Mobile_Number});
        if(alreadyexist){
            return res.status(400).send({
                error : 'user is already registered'
            })
        }else{
            password = bcryptjs.hashSync(password);
            let user = await User.create({First_Name,Last_Name,Email,password,Mobile_Number})
            user = user.toJSON();
            delete user.password;
            return res.status(201).send({
                message : 'successfully registered',
               user : user
            })
        }
    } catch (error) {
        return res.status(500).send({
            message : error
        })
    }
})



AuthRouter.post('/login', async (req, res) => {
    try {
        const user = req.body;
        let {Mobile_Number} = user;    
            
        let existingUser =  await User.findOne({Mobile_Number})
        
        console.log("in login route",existingUser);
        if(existingUser){
           
            let token = jwt.sign({
                _id : existingUser._id,
                Mobile_Number : existingUser.Mobile_Number
            }, JWT_SECRET)
            
            return res.status(200).send({
                id : existingUser._id,
                status : 'success',
                token : token
          })
         }

        
           else{
            return res.status(404).send({
                error : 'Wrong Credentials'
            })
           }
    } catch (error) {
        return res.status(500).send({
            error : error
        })
    }
})

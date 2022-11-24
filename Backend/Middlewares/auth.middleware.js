import { Router} from "express";
import { User } from "../Models/users.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({
    path : './.env.dev'
})
const JWT_SECRET =  process.env.JWT_SECRET_KEY;
export const AuthRouter = Router();

AuthRouter.post('/Signup',async(req,res)=>{
    try {
        const user = req.body;
        let {First_Name,Last_Name,Email,password} = user;      
          let alreadyexist = await User.findOne({email: Email});
          if(alreadyexist){
           return res.status(400).send({
               error : 'user is already registered'
           })
          }else{
            password = bcryptjs.hashSync(password);
            let user = await User.create({First_Name,Last_Name,Email,password})
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

AuthRouter.post('/login',async(req,res)=>{
    try {
        const user = req.body;
         let {email,password} = user;        
         let existingUser =  await User.findOne({email})
         if(existingUser){
         let match = bcryptjs.compareSync(password,existingUser.password)
         if(match){
          //produce JWT token 
          let token = jwt.sign({
             _id : existingUser._id,
             name : existingUser.name,
             email : existingUser.email,
          },JWT_SECRET)
          return res.status(200).send({
             status : 'success',
             token : token
          })
         }else{
             return res.status(400).send({
                 status : 'error',
                 error : 'Password mismatch found'
             })
         }
           }else{
            return res.status(404).send({
                error : 'wrong credentials'
            })
           }
    } catch (error) {
        return res.status(500).send({
            error : error
        })
    }
})

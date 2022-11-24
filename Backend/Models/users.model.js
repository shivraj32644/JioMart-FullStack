import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        "First_Name": {type : String, required: true},
        "Last_Name": {type : String, required: true},
        "Email": {type : String, required: true},
        "password": {type : String, required: true},
    },{
        versionKey : false,
        timeStamps : true
    }
)


export const User = mongoose.model('users',UserSchema)
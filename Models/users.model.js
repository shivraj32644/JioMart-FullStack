import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
         "First_Name": {type : String, required: false},
         "Last_Name": {type : String, required: false},
          "Email":   {type : String, required: false},
          "password": {type : String, required: false},
         "Mobile_Number": {type : Number, required: true,minLength:10}
    },
    {
        versionKey : false,
        timeStamps : true
    }
)


export const User = mongoose.model('users',UserSchema);
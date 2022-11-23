import User from "../Models/users.model";

export const userSignup = async(req,res) => {

    try {
        const user = req.body;
        console.log('user' ,user)
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({ mesage: user });
    } catch (error) {
        console.log(error);
    }

}    


export const userLogin = async(req,res) => {

    try {
        let num = req.body.number;
        
        console.log('name: ',name ,'pass: ',pass);
        let user = await User.findOne({ number: num});

        if(user){ 
            return res.status(200).json({ data : user});
        }else{
            return res.status(400).json({message: "Username or password is incorrect"});
        }
        
    } catch (error) {
        return res.status(500).json(error.message);
    }

}

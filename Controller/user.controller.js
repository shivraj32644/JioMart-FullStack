import { User } from "../Models/users.model.js"

export const GetUser = async(req,res)=>{
    try {
        let {id} = req.params;
        let user = await User.findById({_id:id})
          return res.status(200).send({
            user : user
          })
    } catch (error) {
        return res.status(500).send({
            error : error
          })
    }
}
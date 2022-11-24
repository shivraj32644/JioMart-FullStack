import { productModel } from "../Models/product.model.js"


export const getProducts = async(req,res) => {
    try {
        let {q,sort,limit,page,order} = req.query
        let filter = req.query;
        let data =  await productModel.find();
        
        if (page && limit) {
            limit = Number(limit);
            data = await productModel.find().limit(limit).skip(limit*(page-1))
        }
        if (filter) {
            let val = Object.values(filter)
            let temp = Number(val);
            if (isNaN(temp)) {
                data = await productModel.find(filter)
            }
            else {
                let key = Object.keys(filter)[0]
                data = await productModel.find({[key]:temp})
            }
        }
        if (q) {
            console.log("object");
            await productModel.createIndexes({item_name:"text"})
            data = await productModel.find({ $text: { $search: 'Maggi' } })
        }
        if (sort && order) {
            order = order === 'asc' ? 1 : -1;
            data = await productModel.find().sort({[sort]:order})
        }

        return res.status(200).send(data)
        
    } catch (error) {
        return res.status(500).send({
            status: "Failed",
            message:"Server Error"
        })
    }
}

export const addProduct = async (req, res) =>{
    
}





/*

user = [
    {
        _id: akshansh
        cartItem:[item1,item2item3]
    },
    {
    _id:shivraj
    },
    {
    _id:abhi
    },
    {
    _id:jay
    },
]

// ===============================================
1
let user = user.find()

user.cartItem

let newItem = "";

user.cartItem.push(newItem);

// ==================================
2
cart = [
    {
        cartDetail: "same",
        userId:akshansh
    },
    {
        cartDetail: "same",
        userId:shivraj
    },
    {
        cartDetail: "item2",
        userId:akshansh
    },
    {
        cartDetail: "",
        userId:jay
    },
    {
        cartDetail: "",
        userId:abhi
    },
    {

    },


]

cartModel.find({ userID: akshansh })

=> 3



*/
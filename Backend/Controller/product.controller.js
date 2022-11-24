import { productModel } from "../Models/product.model.js"


export const getProducts = async(req,res) => {
    try {
        let {q,sort,limit,page,order} = req.query
        let filter = req.query;
        console.log(filter);
        let data =  await productModel.find();
        // if  (q) {
        //     await productModel.createIndex({ item_name: 'text'})
        //     data = await productModel.find({ $text: { $search: 'Maggi 2-Minute' }  })
        //     console.log(data)
        // }
        if (page && limit) {
            limit = Number(limit);
            // page = 
            data = await productModel.find().limit(limit).skip(limit*(page-1))
        }
        if (filter) {
            const a = filter;
            data = await productModel.find(filter)
        }
        if (sort && order) {
            order = order === 'asc' ? 1 : -1;
            console.log("this is order", order);
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
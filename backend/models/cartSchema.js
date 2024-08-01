const mongoose=require('mongoose');
const CartSchema=mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    img:{
        type:String
    },
    desc:{
        type:String
    }
})
const  CartModel=mongoose.model('Cart', CartSchema);
module.exports= CartModel;
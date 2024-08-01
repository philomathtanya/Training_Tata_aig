const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
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
const productmodel=mongoose.model('Product',productSchema);
module.exports=productmodel;
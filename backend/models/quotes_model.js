const mongoose=require('mongoose');
const quotesSchema=mongoose.Schema({
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
const quoteModel=mongoose.model('Quotes',quotesSchema);
module.exports=quoteModel;
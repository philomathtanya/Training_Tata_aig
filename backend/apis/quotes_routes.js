const express =require('express');
const router=express.Router();
const Quotes=require('../models/quotes_model')
router.get('/',async(req,res)=>{
   
    try{
     const allQuotes=await Quotes.find({});
    //  console.log(allQuotes);
     res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(404).json({'msg':'something went wrong'});
    } 
   
})

router.get('/quote/:id',async(req,res)=>{
    // res.send("hello");
    const {id}=req.params;
    
    try{
     const quote=await Quotes.findById(id);
     res.status(200).json(quote);
    }
    catch(e){
        res.status(404).json({'msg':'something went wrong'});
    } 
})

router.post('/addQuotes',async(req,res)=>{
console.log(req.body);
   const {Name,Img,Desc,Price}=req.body;
  
    
    try{
     const quote=await Quotes.create({name:Name,img:Img,desc:Desc,price:Price});
     res.status(200).json(quote);
    }
    catch(e){
        res.status(404).json({'msg':'something went wrong'});
    } 
})

router.delete('/delete/:id',async(req,res)=>{
    // res.send("hello");
 const {id}=req.params;
 const findQuote=await Quotes.findById(id);
//  console.log(findQuote);
    
    try{
     const quote=await Quotes.deleteOne({_id:id});
     res.status(200).json({'deletedQuote':findQuote});
    }
    catch(e){
        res.status(404).json({'msg':'something went wrong'});
    } 
})
module.exports=router;
const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const mongoose =require('mongoose');
const quotesroute=require('./apis/quotes_routes');
const seedProducts=require('./seed');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(quotesroute);
app.use(express.json);//jo req.body m aayega wo json format m aayega

mongoose.connect('mongodb://localhost:27017/quotes-app').then(()=>{
    console.log('DB Connected');
}).catch((e)=>{
    console.log(e)
})
// seedProducts();
const port=8000;
app.listen(port,()=>{
    console.log("server started at port 8000");
})








   

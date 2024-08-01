const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const productRoutes = require('./apis/productRoutes');
// const seedProducts=require('./seed');

const bcrypt = require('bcryptjs');
app.use(cors());
app.use(bodyParser.json());
app.use(productRoutes);
app.use(express.json);

mongoose.connect('mongodb://localhost:27017/E-comm-app').then(() => {
    console.log('DB Connected');
}).catch((e) => {
    console.log(e)
})
// seedProducts();
const port = 8000;
app.listen(port, () => {
    console.log("server started at port 8000");
})










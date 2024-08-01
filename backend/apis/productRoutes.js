const express = require('express');
const router = express.Router();
const Products = require('../models/productsModel');
const Cart = require('../models/cartSchema');
const User = require('../models/userSchema');

const bcrypt = require('bcryptjs')
router.get('/', async (req, res) => {

    try {
        const allProducts = await Products.find({});
        res.status(200).json(allProducts);
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }

})

router.get('/product/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Products.findById(id);
        res.status(200).json(product);
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }
})



router.post('/add-product', async (req, res) => {
    console.log(req.body);
    const { Name, Img, Desc, Price } = req.body;


    try {
        const product = await Products.create({ name: Name, img: Img, desc: Desc, price: Price });
        res.status(200).json(product);
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }
})

router.get('/go-to-cart', async (req, res) => {

    try {
        const allCartProducts = await Cart.find({});
        res.status(200).json(allCartProducts);
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }

})

router.post('/add-to-cart', async (req, res) => {
    console.log(req.body);
    // const { name, img, desc, price } = req.body;
    try {
        const cartProduct = await Cart.create(req.body);
        res.status(200).json(cartProduct);
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }
})
router.delete('/remove-from-cart/:id', async (req, res) => {
    const { id } = req.params;
    const findproduct = await Cart.findById(id);
    try {
        const product = await Cart.deleteOne({ _id: id });
        res.status(200).json({ 'deletedproduct': findproduct });
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }
})
router.put('/Edit-product/:id', async (req, res) => {
    console.log(req.body);
    const data = req.body;

    const { id } = req.params;

    try {
        const product = await Products.findOneAndUpdate({ _id: id }, { name: data.name, price: data.Price, img: data.Img, desc: data.Desc })

        res.status(200).json(product);
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const findproduct = await Products.findById(id);
    try {
        const product = await Products.deleteOne({ _id: id });
        res.status(200).json({ 'deletedproduct': findproduct });
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }
})
router.post('/register-user', async (req, res) => {
    console.log(req.body);
    const { name, email, password, isLoggedIn } = req.body;
    const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        const userList = await User.create({ name: name, email: email, password: hashedPassword });
        res.status(200).json({ status: 'ok', userList });
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }
})
router.post('/login-user', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userList = await User.find({ email });


        const isMatch = await bcrypt.compare(password, userList[0].password);
        if (isMatch) {
            const result = await User.updateOne(
                { email },
                { $set: { isLoggedIn: true } } // Explicitly setting isLoggedIn to true
            );
            console.log(userList[0].email)
          
            // localStorage.setItem("email", userList[0].email)
      
            res.status(200).json({ status: 'ok', userList, message: 'User found' });
        }
        else {
            res.status(404).json({ status: 'not found', message: 'User not found' });
        }

    }
    catch (error) {
        // Handle errors
        console.error('Error occurred:', error);
        res.status(500).json({ status: 'error', message: 'An error occurred' });
    }
});

router.post('/check-loggedIn-user', async (req, res) => {
    console.log(req.body);
   
    try {
        const userList= await User.findOne({email});
        if(userList[0].isLoggedIn===true)
        res.status(200).json({status:ok});
    }
    catch (e) {
        res.status(404).json({ 'msg': 'something went wrong' });
    }
})
module.exports = router;

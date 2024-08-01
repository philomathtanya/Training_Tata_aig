const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    isLoggedIn: {
        type: Boolean
        , default: false
    }
})
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
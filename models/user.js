const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'enter your name because name is compulsary']
    },
    role:{
        type:String,
        default:Customer
    },
    email:{
        type:String,
        required:[true,'Please enter your email id']
    },
    password:{
        type:String,
        required:[true,'Enter password']
    }
    
})

module.exports = mongoose.model('User',userschema)
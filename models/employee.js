const mongoose = require('mongoose');
const validator = require('validator')

const employeeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Please enter name '],
        maxLength : [30,'Your name should be of maximum 30 character']
    },
    address:{
        type:String,
        required:[true]
    },
    age:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Employee',employeeSchema);


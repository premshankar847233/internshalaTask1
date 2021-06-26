
const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson')
const Employees = require('../models/employee')


exports.upload = async(req,res)=>{

    try
    {
        if(req.file == undefined)
        {
            return res.status(400).json({
                status:false,
                message:"upload the required file"
            })
        }

        let Path = __basedir+'/uploads/'+req.file.originalname;
        console.log(Path);
        console.log(req.file.originalname);

        csvtojson()
        .fromFile(Path)
        .then(csvData=>{
           console.log(csvData);
           const result =  Employees.insertMany(csvData);
           console.log(result);

        })

        res.status(200).json({
            status:true,
            message:"file uploaded succesfully and uploaded to database"
        })

    }
    catch(error)
    {
        res.status(200).json({
            status:'false',
            message:'error occured'
        })
    }
}

exports.getData = async (req,res,next) =>{
    const result = await Employees.find().select('-_id -__v')
    res.status(200).json({
        status:true,
        result
    })
}



const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({

    destination:(req,file,cb)=>cb(null,__basedir+'/uploads'),
    filename:(req,file,cb)=>{
        console.log(file.originalname);
        const uniqueName = file.originalname;
        cb(null,uniqueName);
    }
})

var uploadFile = multer({
    storage,
    limits:{fileSize:1000000*5}
}).single('file');

module.exports = uploadFile;

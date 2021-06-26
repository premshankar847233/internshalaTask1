const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/upload');
const csvController = require('../controllers/csvController')
// router.post('/uploadsfile',uploadFile,csvController.upload);
// router.get('/getdata',data);
router.route('/upload').post(uploadFile,csvController.upload)
router.route('/employee').get(csvController.getData);
module.exports  = router;
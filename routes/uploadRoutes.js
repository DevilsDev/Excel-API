const express = require('express')
const router = express.Router()
const uploadController = require('../controllers/uploadController')

//POST endpoint for file upload

router.post('/file', uploadController.uploadFile)

module.exports = router
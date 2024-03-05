const express = require ('express')
const bodyParser = require('body-parser')
const multer = require('multer')

const excellRoutes = require ('./routes/excelRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/upload', uploadRoutes)
app.use('/api/excel', excellRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = app

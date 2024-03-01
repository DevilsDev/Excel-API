const express = require ('express')
const excellRoutes = require ('./routes/excelRoutes')
const app = express()
const port = 3000

app.use('/api/excel', excellRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = app
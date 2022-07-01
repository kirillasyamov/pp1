require('dotenv').config()
const express = require('express')
const sequelize = require(`./db`)
const PORT = process.env.PORT || 7000

const models = require(`./models/models.js`)
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const path = require('path')

const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// ! middleware with errors should be logged at the very end
app.use(errorHandler)
//on it, work stops and we return a response to the client

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`WORKING ON ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()


const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');
const app = express()

// *** init middlewares ***

    // 5  mode
    // morgan('combined')
    // morgan('common')
    // morgan('dev')
    // morgan('short')
    // morgan('tiny')

app.use(morgan('dev'))
app.use(helmet())
app.use(compression())


// *** init db ***
require('./dbs/init.mongodb.js')

//init routes
app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello world'
    })
})


// *** handle errors ***

module.exports = app;
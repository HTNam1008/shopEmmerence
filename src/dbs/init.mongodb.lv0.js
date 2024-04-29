'use strict'

const mongoose = require('mongoose')

const connectString='mongodb+srv://devhoangthanhnam1008:a5ove1bkRC0o9NPI@cluster0.uezitjm.mongodb.net/'

mongoose.connect(connectString).then(_=>console.log(`connected MongoDB Success.`))
.catch(err=>console.log(`connected MongoDB Fail.`))

// dev
if (1 === 0) {
    mongoose.set('debug',true)
    mongoose.set('debug', {color: true})
}

module.exports = mongoose
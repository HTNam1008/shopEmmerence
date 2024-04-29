'use strict'

const mongoose = require('mongoose')

const connectString='mongodb+srv://devhoangthanhnam1008:a5ove1bkRC0o9NPI@cluster0.uezitjm.mongodb.net/'

const {countConnect}=require('../helpers/check.connect')

class Database{

    constructor(){
        this.connect()
    }

    //connect
    connect(type='mongodb') {
        // dev
        if (1 === 1) {
            mongoose.set('debug',true)
            mongoose.set('debug', {color: true})
        }

        mongoose.connect(connectString).then(_=>{
            console.log(`Connected MongoDB Success Pro.`,countConnect())})
        .catch(err=>console.log(`Connected MongoDB Fail.`))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb=Database.getInstance()

module.exports = instanceMongodb
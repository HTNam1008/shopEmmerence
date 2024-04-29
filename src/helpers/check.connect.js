'use strict'

const mongoose=require('mongoose')
const os=require('os')
const process=require('process')
const _SECONDS=5000
// count Connect
const countConnect=()=>{
    const numConnection=mongoose.connections.length

    console.log(`Number of connections ::${numConnection}`)
}

// check overload

const checkOverload=()=>{
    setInterval(()=>{
        const numConnection=mongoose.connections.length
        const numCore=os.cpus().length // number of core
        const memoryUsage=process.memoryUsage().rss // memory usage
        
        // example maximum number of connections based on the number of cores
        const maxConnections=numCore*5
        console.log(`Active connections :: ${numConnection}`)
        console.log(`Memory Usage :: ${memoryUsage/1024/1024} MB`)

        if (numConnection>maxConnections){
            console.log(`Overload :: ${numConnection} connections`)
        }

    },_SECONDS) // Monitor every 5 seconds
}
module.exports={
    countConnect
}
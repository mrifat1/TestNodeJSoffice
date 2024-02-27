const connection = require('./demo_db_connection')
const express = require('express')
const bodyParser = require('body-parser')
const myModule = require('./query')

var app = express()

app.use(bodyParser.json())

app.listen(3000, ()=> console.log('Express server is running at port 3000'))

app.get('/customers',(req,res)=>{
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('fullUrl', fullUrl)
    console.log('request',req.query,req.params);
    let paramName = req.params.id
    let queryName = req.query.name
    
})


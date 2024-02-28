// var mysql = require('mysql2');

// var mysqlConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "MyTestDB"
// });

const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'MyTestDB'
})


module.exports = mysqlPool


// const express = require('express')
// const bodyParser = require('body-parser')
// const myModule = require('./query')

// var app = express()

// app.use(bodyParser.json())

// app.listen(3000, ()=> console.log('Express server is running at port 3000'))

// mysqlConnection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let paramName = req.params.id
//   let queryName = req.query.name
//   mysqlConnection.query(myModule.getAllCustomersQuery.query,[queryName,paramName],(err,results,fields,query)=>{
//         console.log('fields',fields);
//         console.log('query',query);
//         if(err){
//             console.log('error',err)
//             res.send(err)
//         }
//         else{
//             console.log('results of get API',results)
//             res.send(results)
//         }
//     })
// });
// module.exports = mysqlConnection
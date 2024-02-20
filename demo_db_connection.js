var mysql = require('mysql2');

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "MyTestDB"
});


mysqlConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = mysqlConnection
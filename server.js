// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  var mysqlConnection = require('./demo_db_connection')
  //   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  
//   var name = ["Orbitax", "DSI", "Brainstation 23"];
//   var address = ["Mohakhali", "Mirpur DOHS", "Mirpur"];


//   var toOneArray = function(names, address) {
//     return names.map(function(name, i) {
//         return [name, address[i]]
//     });
//   }

let dataFromUser = 'softinzo'
  var data = [
    {
        name: 'Tallykhata',
        address: 'Banani'
    },
    {
        name: "Softinzo",
        address: "Badda"
    }
  ]
//   var sql ="INSERT INTO customers (name,address) VALUES ?";
  var sql ="SELECT * from customers WHERE name = ?";
  mysqlConnection.query(sql,[dataFromUser], function (err, result) {
        if (err) throw err;
        console.log("Data Inserted",result);
  });
    
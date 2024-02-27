// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  var connection = require('./demo_db_connection')
  //   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  
//   var name = ["Orbitax", "DSI", "Brainstation 23"];
//   var address = ["Mohakhali", "Mirpur DOHS", "Mirpur"];


//   var toOneArray = function(names, address) {
//     return names.map(function(name, i) {
//         return [name, address[i]]
//     });
//   }

// var data = [
//   {
//       name: 'Tallykhata',
//       address: 'Banani'
//   },
//   {
//       name: "Softinzo",
//       address: "Badda"
//   }
// ]
let getAllCustomersQuery = {
    query: "SELECT * from customers WHERE name = ? and customerId = ?",
    param: 'softinzo'
}
module.exports = {
  getAllCustomersQuery
}
// let dataFromUser = 'softinzo'
//   var sql ="INSERT INTO customers (name,address) VALUES ?";
  // var sql ="SELECT * from customers WHERE name = ?";
  // connection.query(sql,[dataFromUser], function (err, result) {
  //       if (err) throw err;
  //       console.log("Data got",result);
  // });
    
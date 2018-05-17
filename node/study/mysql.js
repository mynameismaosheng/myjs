var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * from user', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
});
// module.exports = connection
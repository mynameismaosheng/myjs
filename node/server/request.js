var connection = require('../study/mysql');
var request = require('request')
console.log(123)
request('../study/mysql.js',function(err,res){
    if (err) throw err;
    // console.log(res)
})
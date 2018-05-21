var express = require("express");  
var http = require("http");  
var app = express();  
var router = express.Router();  
var testRouter =  require('./router');  
  
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');

    next();
}
app.use(allowCrossDomain)

app.use('/api', testRouter);  
http.createServer(app).listen(3000);  
console.log('启动api')
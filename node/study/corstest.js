var express = require('express') 
var cors = require('cors') 
var app = express() 
var querystring = require('querystring');
var corsOptions = { origin: '*', optionsSuccessStatus: 200 } 
app.post('/products/user',cors(corsOptions), function (req, res, next) {    
        var body = '';
        var resData = {
            msg: '成功访问',
            code:200
        }
        req.on('data', function (chunk) {
            // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
            body += chunk;
        });
        req.on('end', function () {
            resData.data = querystring.parse(body);
            res.json(resData) 
        });
    }
) 
app.listen(3000, function () { 
    console.log('CORS-enabled web server listening on port 3000') 
})
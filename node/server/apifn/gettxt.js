var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
http.createServer( (req, response) => {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
     // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(body.txt) { // 输出提交的数据
            let havetxtMain = require('./havetxtMain')
            havetxtMain.main(body.txt ,response)
        }else {  // 输出表单
            fs.readFile('./index.html' , (err, res) => {
                if(err) throw err;
                response.end(res)
            })
        }
    })

}).listen(36882)
console.log('browser open localhost:36882')
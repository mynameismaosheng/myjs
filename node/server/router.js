var express = require('express');  
var router = express.Router();  
var querystring = require('querystring');
/* GET home page. */  
router.get('/', function(req, res, next) {  
  res.render('index', { name: 'Express 路由1' });  
});  
  
/* GET home page. */  
router.get('/cors', function(req, res, next) {  
  res.render('test/index', { name: 'Express 路由1' });  
});  
  
/* GET home page. */  
router.get('/getData', function(req, res, next) {  
  //设置允许跨域请求  
  // var reqOrigin = req.header("origin");  
  
  // // if(reqOrigin !=undefined && reqOrigin.indexOf("http://localhost:3000") > -1){  
  // // //设置允许 http://localhost:3000 这个域响应  
  //   res.header("Access-Control-Allow-Origin", "*");  
  //   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  //   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");  
  // // }  
  res.json(200, {name:"张三1",age:40});
});  
  
router.post('/getMp3DownloadUrl', function(req, response, next){
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
     // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        // response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(body.txt) { // 输出提交的数据
            let havetxtMain = require('./apifn/havetxtMain')
            havetxtMain.main(body.txt ,response , function(){
                response.status(200).json({code:200,mes:"maunsell",data:'http://localhost:3000/大禹治水.mp3'});  
            })
        }else {  // 输出表单
          
          response.status(200).json({code:400,mes:"没有接到txt参数",data:null});
        }
    })
})
module.exports = router;
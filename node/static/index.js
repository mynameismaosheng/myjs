var http = require("http");  
var fs = require('fs');
http.createServer((req,gres) => {
    fs.readFile('./index.html', (err,res)=>{
        if(err) throw err;
        gres.end(res)
    })
}).listen(3006);  
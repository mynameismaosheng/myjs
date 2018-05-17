'use strict';
var fs = require('fs'),
    files = fs.readdirSync('./talk');


files.forEach(function (file) {
    console.log(file)  
    fs.stat('./talk/' + file, function (err, stat) { 
    if (err) { 
      console.log(err); 
    } else { 
      // 是否是文件: 
      console.log('isFile: ' + stat.isFile()); 
      // 是否是目录: 
      console.log('isDirectory: ' + stat.isDirectory()); 
      if (stat.isFile()) { 
        // 文件大小: 
        console.log(JSON.stringify(stat))
        console.log('size: ' + stat.size); 
       // 创建时间, Date对象: 
        console.log('birth time: ' + stat.birthtime); 
        // 修改时间, Date对象: 
        console.log('modified time: ' + stat.mtime); 
      } 
    }
  });
});


var fs = require('fs');
fs.writeFile('test.txt', '我来写内容,It\'s ok', function(err) {
    if (err) {
        return console.log(err)
    }
    console.log("写入成功")
    fs.readFile('test.txt', function(err, data) {
        if (err) {
            return console.log(err)
        }
        console.log('wirte result:'+ data.toString())
    })
})
var fs = require('fs'),
    files = fs.readdirSync('./talkMp3'),
    clips = [],
    number = 0,
    stream,
    currentfile,
    timestamp = new Date().getTime(),
    dhh = fs.createWriteStream('./mp3'+timestamp+'.mp3');

files.forEach(function (file) {
    clips.push(file);  
});
function main() {
    console.log(timestamp)
    if (number == clips.length) {
        if(fs.existsSync('./talkMp3')){
            fs.rmdirSync('./talkMp3')
        }
        dhh.end("Done"); // 将可写流关闭, 变成为不可写状态
        number = 0;
        return;
    }
    currentfile = './talkMp3/' + clips[number];
    stream = fs.createReadStream(currentfile);
    stream.pipe(dhh, {end: false});
    stream.on("end", function() {
        fs.unlinkSync(currentfile)
        number++
        main();        
    });
}
exports.main = main
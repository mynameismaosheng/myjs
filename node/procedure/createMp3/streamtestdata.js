var fs = require('fs'),
    files = fs.readdirSync('./talkMp3'),
    clips = [],
    stream,
    currentfile,
    dhh = fs.createWriteStream('./荷塘月色.mp3');

files.forEach(function (file) {
    clips.push(file);  
});

function main() {
    if (!clips.length) {
        // fs.rmdirSync('./talkMp3')
        dhh.end("Done");
        return;
    }
    currentfile = './talkMp3/' + clips.shift();
    stream = fs.createReadStream(currentfile);
    stream.pipe(dhh, {end: false});
    
    stream.on("end", function() {
        console.log(currentfile + ' appended');
        // fs.unlinkSync(currentfile)
        main();        
    });
}
exports.main = main
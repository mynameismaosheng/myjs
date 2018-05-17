let AipSpeech = require("baidu-aip-sdk").speech;
let fs = require('fs');

let client = new AipSpeech(11248609, 'shOFEN0UlFLRGnhvjR9PwUEb', '434d27e73dfaad3d3498c6ecbb7a24d1');


fs.readFile('./talk.txt', {encoding : 'utf-8'} ,(err,data) => {
    if(err) throw err;
    var talkMp3 = './talkMp3' 
    if (!fs.existsSync(talkMp3)) {
        fs.mkdirSync(talkMp3);
    }
    let dhh = fs.createWriteStream(talkMp3 + '/大禹治水.mp3');
    txtArr(data).forEach(function(item,index){
        client.text2audio(item, {tex:'utf-8'}).then(function(result){
            if(result.data){
                // console.log('语音合并成功' );
                // fs.writeFile(talkMp3 + '/大禹治水'+index+'.mp3', result.data) //true
                /*  error  */
                // let stream = fs.createReadStream(result.data);
                // stream.pipe(dhh ,{ end: false })

                // if(index == txtArr(data).length - 1){
                //     console.log('语音流合并成功' );
                //     fs.writeFile(talkMp3 + '/大禹治水.mp3', mp3stean)
                // }
            } else {
                // 合成服务发生错误
                console.log('语音合成失败: ' + JSON.stringify(result));
            }
        }, function(err){
            console.log('err', err)
        })
        
    })
})

function txtArr(data){
    let lot,tArr = [];
    if(data && data.length){
        lot = Math.ceil(data.length / 500)
        for (let i = 0; i < lot; i++) {
            tArr.push(data.substring( i * 500,500*(i+1)))
        }
    }
    return tArr
}
// 语音合成
var fs = require('fs');
// 语音合成, 附带可选参数
client.text2audio('百度语音合成测试', {spd: 0, per: 4}).then(function(result) {
    if (result.data) {
        fs.writeFileSync('tts.mpVoice.mp3', result.data);
    } else {
        // 服务发生错误
        console.log(result)
    }
}, function(e) {
    // 发生网络错误
    console.log(e)
});
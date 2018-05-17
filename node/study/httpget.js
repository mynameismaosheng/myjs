const https = require('https');

https.get('https://music.163.com/api/song/lyric?id=%22%E6%88%91%E7%88%B1%E4%BD%A0%22', (res) => {
  console.log('状态码：', res.statusCode);
  console.log('请求头：', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});

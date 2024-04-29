const http = require('http'); // http 기반 통신을 도와주는 객체
var morgan = require('morgan') // 프로그램 내에서 일어나는 일을 기록하는 객체
var logger = morgan('combined') // 기록 객체

//내 프로그램이 돌아갈 서버 주소 정보
const hostname = '127.0.0.1';
const port = 3000;

// 서버 객체 만들어서 참조하기
const server = http.createServer(function (req, res) {
  logger(req, res, function (err) {
    if (err) return console.log(err)
 
    res.statusCode = 200; // 정상 응답
    res.setHeader('content-type', 'text/plain') // 응답 헤더
    res.end('hello, world!') // 실제 응답 정의
  })
})

//서버 구동
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
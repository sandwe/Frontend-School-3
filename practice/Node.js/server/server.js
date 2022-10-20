const http = require("http"); // require(): 어떤 패키지를 가져와 사용하게 해준다.

// http
//   // 응답을 보내는 코드
//   .createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html"}); // 헤더 작성, 응답을 잘 보냈을 때: 200
//     res.end("<p>Hello World~!!!</p>");
//   })
//   // 서버를 실행하는 코드
//   .listen(3000, () => {
//     console.log("3000번 포트 서버 접속 완료");
//   });

http
  // 응답을 보내는 코드
  .createServer((req, res) => {
    // url 요청에 맞게 분기처리 하는 것: 라우팅(routing)
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url == "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("not found!");
    }
  })
  // 서버를 실행하는 코드
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료");
  });

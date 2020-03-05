const http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello world");
}).listen(9888);

console.log("http://127.0.0.1:9888");

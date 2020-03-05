const http = require("http");

http.createServer(function(req, res) {
    Response.writeHead(200, { "Content-Type": "text/plain" });
    Response.end("hello world");
}).listen(9888);

cons

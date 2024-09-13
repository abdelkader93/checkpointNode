const http = require("http");
const { listenerCount } = require("process");
http.createServer((request, response) => {
    response.end("hello Node!!!");

}).listen(3000);
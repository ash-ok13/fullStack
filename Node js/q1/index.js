var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.end('Hello Node Js\nHow you doing?');
});
server.listen(5500);
console.log("Node js server is running");





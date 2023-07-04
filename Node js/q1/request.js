var http = require('http'); 
var server = http.createServer(function (req, res) {  
    if (req.url == '/') { 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h3>Namaste!!!</h3></body></html>');
        res.end();
    
    }
    else if (req.url == "/test") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>Hey Whats\'up?</h1></body></html>');
        res.end();
    
    }
    else if (req.url == "/user") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h4>This is user Page</h4></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});
server.listen(5000); 
console.log('Node.js web server at port 5000 is running..')
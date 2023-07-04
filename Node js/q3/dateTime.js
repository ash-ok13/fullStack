let http = require('http');
let dateTime = require('./date.js')
let server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.end('Date and Time: ' + dateTime.dateTimeVal() + '<br>' +'Time: ' + dateTime.timeVal());
    
});
server.listen(4000);
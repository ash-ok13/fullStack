
const http = require('http');
const server = http.createServer(function(req,res){
    res.write(__dirname)
    res.end()
});
server.listen(3000);
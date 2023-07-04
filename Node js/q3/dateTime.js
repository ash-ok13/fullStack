let http = require('http');
let dateTime = require('./date.js')
let server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    // response.end('Date and Time: ' + dateTime.dateTimeVal() + '<br>' +'Time: ' + dateTime.timeVal());
    response.write('Date and Time: ' + dateTime.dateTimeVal() + '<br>');
    response.write('Time: ' + dateTime.timeVal() + '<br>');
    
    const targetDate = '2023-07-08';
    const remainingDays = dateTime.calculateDaysLeft(targetDate);
    response.write('Days Left: ' + remainingDays);

    const targetDate1 = '2023-07-08';
    const targetDate2 = '2023-07-25';
    const remainingDays1 = dateTime.calculateDaysLeft1(targetDate1,targetDate2);
    response.end('Days Left between : ' + remainingDays1);


    

});
server.listen(4000);
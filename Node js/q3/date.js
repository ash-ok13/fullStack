const dateTimeObject = new Date();
module.exports.dateTimeVal = function(){
    return dateTimeObject.toDateString() + dateTimeObject.toTimeString();
}
module.exports.timeVal = function(){
    return dateTimeObject.toTimeString();
}
module.exports.calculateDaysLeft = function(targetDate) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const currentDate = new Date();
    const targetDateTime = new Date(targetDate);
    const timeDiff = targetDateTime.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / oneDay);

    return daysLeft;
};

module.exports.calculateDaysLeft1 = function(targetDate1,targetDate2) {
    const oneDay = 24 * 60 * 60 * 1000; 
    
    const targetDateTime1= new Date(targetDate1);
    const targetDateTime2 = new Date(targetDate2);
    const timeDiff = targetDateTime2.getTime()-targetDateTime1.getTime() ;
    const daysLeft = Math.ceil(timeDiff / oneDay);

    return daysLeft;
};

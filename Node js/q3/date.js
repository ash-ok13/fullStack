const dateTimeObject = new Date();
module.exports.dateTimeVal = function(){
    return dateTimeObject.toDateString() + dateTimeObject.toTimeString();
}
module.exports.timeVal = function(){
    return dateTimeObject.toTimeString();
}
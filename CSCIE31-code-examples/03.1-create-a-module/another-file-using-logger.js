// another file using logger


module.exports = function(){

  var myLocalLogger = require("./logger");
  myLocalLogger.showtime = false;
  //do something here
  myLocalLogger.log("I'm logging from inside another-file-using-logger.js");

}

// another file using logger


module.exports = function(){

  var myLocalLogger = require("./logger-no-shared-state")();
  myLocalLogger.showtime = false;
  //do something here
  myLocalLogger.log("I'm logging from inside another-file-using-logger-no-shared-state.js");

}

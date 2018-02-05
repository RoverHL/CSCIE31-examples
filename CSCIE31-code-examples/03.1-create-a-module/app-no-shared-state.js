var logger = require("./logger-no-shared-state")();  // have to call this here as factory


console.log("manual logging");
console.log(logger);
logger.log("first logger logging");

require("./another-file-using-logger-no-shared-state")();

logger.log("second logger logging: note the state of the 'showtime' property");

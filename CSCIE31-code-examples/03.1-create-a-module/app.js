var logger = require("./logger");


console.log("manual logging");
logger.log("first logger logging");

require("./another-file-using-logger")();

logger.log("second logger logging after the second require");

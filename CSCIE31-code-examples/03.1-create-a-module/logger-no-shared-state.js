// create a logging module


var loggerNoSharedState = function() {

return {

    log : function(message){
        let time = '';
        if (this.showtime){
          time = new Date().toTimeString();
        }else{
          time = '## ';
        }
        console.log(time + ":" + message);
    },

    showtime : true,

    timeformat : 'YYYY-MM-DD HH:mm:ss.SSS',

    file : null

    }
}

module.exports = loggerNoSharedState;
/* the value tied to module.exports is cahced, so you can't
 * execute this function here as a self-invoking or as a
 * call to loggerNoSharedState() on the module.exports line.
 You have to call the factory class from the require line or later.
 */

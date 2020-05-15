// practical exm of emmiter
const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  // method log
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

/*
i moved this here from index.js to have exp
//commenjs methods
const Logger = require('./logger')

// instant
const logObj = new Logger();
logObj.on('message', (data)=> {
    console.log(data)
})

logObj.log('Hey dear logger')
logObj.log('goodbye')
*/

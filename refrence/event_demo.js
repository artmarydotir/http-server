const EventEmitter = require('events');

// create class 
class MyEmitterClass extends EventEmitter {}

// init object
const myEmitter = new MyEmitterClass();

// create event listener 
myEmitter.on('event', ()=> {
    console.log('event fired..')
})

// any time i emit event :
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
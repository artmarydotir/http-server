// create child_process.fork(modulepath, [arg], {option})
// send message to parent process

const cp = require('child_process');
const path = require('path');


// with option
let child1 = cp.fork('fork.js', ['mary', 'hana'], {cwd: '../hello1'})

// listen to child
child1.on('message', (data)=> {
  console.log(`parent received: ${data}`)
})

/**
 * this would fire when the child terminated.
 */
child1.on('exit', ()=> {
  console.log('child terminate')
})

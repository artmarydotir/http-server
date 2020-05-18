// create child_process.fork(modulepath, [arg], {option})
// fork is not async
// and you starting it with javascript file

const cp = require('child_process');
const path = require('path');

let child = cp.fork('../hello1/fork.js', ['mary', 'hello'])
// with option
let child1 = cp.fork('fork.js', ['mary', 'hello'], {cwd: '../hello1'})

/**
 * this would fire when the child terminated.
 */
child1.on('exit', ()=> {
  console.log('child terminate')
})

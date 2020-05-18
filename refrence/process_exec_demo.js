// create child_process.exec(command, {option}, {callback})
// exec func start shell but spawn does not.

const cp = require('child_process')

let progs = {
  list: 'ls',
  remove: 'rm'
}

// let child = cp.exec(progs.remove + ' -r hello1', (error, stdout, stderr )=> {
//   if (error) {
//     console.log('error', error)
//   }
//   if (stdout) {
//     console.log('2')
//   }
//   if (stderr) {
//     console.log('3')
//   }
// })
// child.stderr.on('data', (err)=> {
//   console.log(err)
// })

let child2 = cp.exec(progs.list, { cwd: 'test' }, (error, stdout, stderr)=> {
  if (error) {
      console.log(error.message)
  } else {
    console.log(stderr)
  }
})

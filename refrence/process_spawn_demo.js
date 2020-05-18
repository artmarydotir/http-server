// create child_process.spawn(command, [arg], {options})
const cp = require('child_process');

let args = {
  list: "ls",
  copy: "cp",
  folder: "mkdir"
}

// let child = cp.spawn(args.list);
// child.stdout.on('data', (data)=> {
//   console.log(data)
// });

/**
 * with -a flag
 * {cwd: '..'} => where to run command
 *
 *  */
let child = cp.spawn(args.list, ['-a'], {cwd: '..'});
child.stdout.on('data', (data)=> {
  console.log(`data:\n${data}`)
});

let child2 = cp.spawn(args.list, ['-l']);
child2.stdout.on('data', (data)=> {
  console.log(`data:\n${data}`)
});

let child3 = cp.spawn(args.list, ['pubb']);
child3.stdout.on('data', (data)=> {
  console.log(`data:\n${data}`)
});

// see the standard eroor
child3.stderr.on('data', (err)=> {
  console.log(`error: ${err}`);
})


// copy
let copyChild = cp.spawn('cp', ['os_demo.js', 'process1.js'], {cwd: './refrence'});
copyChild.on('exit', ()=> {
  console.log('finished')
});

copyChild.stderr.on('data', (err)=> {
  console.log(`error: ${err}`);
})


// make dir
let mkdirChild = cp.spawn(args.folder, ['hello1']);
mkdirChild.on('exit', ()=> {
  console.log('mkdir finished')
});

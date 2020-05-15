const fs = require('fs');
const path = require('path');

// 1 - Create folder - by defualt its asyc bcuz it takes callback=>(path, option, callback)
// {} its option
// fs.mkdir(path.join(__dirname, '/test'), {}, (err)=> {
//     if(err) throw err;
//     console.log('Folder created..')
// })

// 2- Write file to test
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'iam the writing option', (err)=> {
//     if(err) throw err;
//     console.log('file writed...')
//     // 3- file append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' i appended', (err)=> {
//         if(err) throw err;
//         console.log('file appended...')
//     });
// });

// 4- Read file
fs.readFile(
  path.join(__dirname, '/test', 'hello.txt'),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// 5- Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'renamed.txt'),
  (err, data) => {
    if (err) throw err;
    console.log('file renamed..');
  },
);

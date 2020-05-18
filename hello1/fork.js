// 1-simple child process data

let data = process.argv.slice(2);
console.log(data)
// console.log(process)



// 2-send message to parent demo
function sayGreet(names) {
  names.forEach(name => {
    process.send(`Hello ${name}`);
  });
}

sayGreet(data);

// 3- listen to parent message
process.on('message', (userData)=> {
  console.log('child received:')
  console.dir(userData)
})

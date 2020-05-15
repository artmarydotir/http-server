const path = require('path');

// Base file name
console.log(path.basename(__filename))

// Direcotory name
console.log(path.dirname(__filename))

// File extention
console.log(path.extname(__filename))

// Create path Object
console.log(path.parse(__filename))

// Access path object property
console.log(path.parse(__filename).ext)

// concatenate path exp: ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))

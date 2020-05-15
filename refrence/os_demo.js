const os = require('os');

// platform
console.log(os.platform()) // linux

// cpu arch
console.log(os.arch()) // x64

// cpu core info
console.log(os.cpus())  // array of core object
console.log(os.cpus().length) // number of core

// free memory
console.log(os.freemem())

// total memory
console.log(os.totalmem())

// home directory
console.log(os.homedir())

// uptime
console.log(os.uptime())
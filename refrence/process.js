//let name = process.argv[0] // is node
//let name = process.argv[1] // is programe file name
let name = process.argv[2];

console.log(`name is : ${name}`)

/**
 * stdin -> standard input
 * it ask promp
 *
 */
process.stdin.on('data', (data)=> {
  console.log(data.toString());
})

// const url = require('url');

// instantiat url obj
const myUrl = new URL('http://artmary.ir:8080/post.html?id=100&status=active');
// console.log(myUrl)

// 1- Serialized url
console.log(myUrl.href); // or using toString methods
console.log(myUrl.toString());

// 2- Host (root domain) include port
console.log(myUrl.host);

// 3- Host name (does not get port)
console.log(myUrl.hostname);

// 4- serialize query
console.log(myUrl.search);

// 5- add params to query
myUrl.searchParams.append('name', 'adding');
console.log(myUrl.search);

// 6- loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});

// helloworld.js
// console.log("Hello World!");

// for(var i = 0; i<10; i++){
//     console.log(i);
// }


// Requiring a module
// Node has a handful of built in modules, one of those is called `fs`
var fs = require('fs');
// console.log(fs);
console.log(
    fs.readFileSync('./notes.txt', 'utf-8')
);
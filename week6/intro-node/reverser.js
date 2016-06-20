// reverser.js

// CHALLENGE \\
// Run a node script that accepts a string as an argument and console.logs the reverse of it

// "potato" => "otatop"


var string = process.argv[2];

var reversed = string
    .split('') // Turns string into array
    .reverse() // reverses the order of the array
    .join(''); // turning the array back into a string
console.log(reversed);
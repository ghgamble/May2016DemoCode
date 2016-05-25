// Closures

// var USA = ['Alaska', 'Texas']
// var MexicoSign = USA
// var CanadaSign = USA


// Functions are values just like strings, etc!
// .addEventListener('click', buildFunctions)

// IIFE (iffys) - Immediately Invoked Function Expressions
// Defining and calling a function in a single step
// function myFunc(){

// }
// myFunc()
// VS
// (function(){

// })()

// function buildFunctions(){
//     var arr = [];
//     for (var i = 0; i < 3; i++){
		
//     	(function(index){
//     		console.log("Index at this point ", index)
//     		arr.push(function(){
//     			console.log(index)
//     		})
//     	})(i)

//     	// Paranthesis get evaluated FIRST in the order of operations
//     	// this || ( (that && thus) %% thar )
//     	// 5 + (4 / 2) * 6 % 3
// 		// arr.push(function(){
// 		// 	console.log(i)
// 		// })
//     }
//     return arr
// }
// var fs = buildFunctions()
// // console.log(i) // Does not exist
// fs[0]()
// fs[1]()
// fs[2]()



// Every time we make a player, that player has closure over their OWN health variable
// They all have their own instanced version of that health variable
// Encapsulation
function makePlayer (name){
	var health = 100;
	var playerName = name;

	return function(damage){
		health -= damage;
		
		if( health <= 0){
			console.log(playerName + ' got rekt')
		}
		else{
			console.log(playerName + ' has ' + health + 'hp left')
		}
	}
}

var bananaFuton = makePlayer('bananaFuton');
// bananaFuton(20);
var george = makePlayer('george');




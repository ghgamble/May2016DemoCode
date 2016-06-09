 // This is a single line comment
/*
    You can type comments here.
 */

// good vars
var foo = 1;
var iLikeCamels = 1.1;
var snakes_are_awesome;
var __singleton;

// bad vars
var 2fast2furious; // can't do this!
var $scope;
var char+mander;
var awesome-things-and-stuff;
var me&you;

// Primitive Types
// Numbers
// Strings
// Booleans
// undefined
// null

console.log('foo:', foo, 'iLikeCamels:', iLikeCamels);

// Numbers
var foo = 1;
var pi = 3.141592;
var million = 1e6; // 1,000,000

console.log(million);
console.log((2+3)/4);

// Operators
// +
// -
// *
// /
// %

// Assign a variable that will add two numbers and multiple the result (=16);

var math = (5+3)*2;

var num1 = 1;
var num2 = 15;
var result = num1+num2;

console.log(num1, num2, result);

// Strings
// '';
// "";
// 'a';
// '1';
// ' ';

console.log( 1, '1' );

'hello!'
'Man, donuts sound so good right now...';
'don\'t' // use single quotes for situations like these

// universal escape character === '\'
// escapes special characters in a string


var sentence1 = "Instead, use double qutoes for don't, can't, etc";
var d = "Don't"; // newline
var t = 'taze';
var m = 'me';
var b = 'bro';

// semicolons
// always use these. just always use these all the time everywhere.
// +

// concatenating
// adding strings together
var sentence2 = d + ' ' + t + ' ' + m + ' ' + b;

console.log(sentence2);
console.log(d,t,m,b);

console.log(sentence1.length);
console.log(sentence1[0], sentence1[1], sentence1[2]);


Boolean

var pizzaIsGood = true;
var catFoodIsGood = false;
var true = "something";

console.log(pizzaIsGood)
console.log(catFoodIsGood);

// Boolean Operators
// &&
// ||
// !
// !=
// >
// >=
// <=
// <
// ==
// ===

console.log( pizzaIsGood && catFoodIsGood ); // false
console.log( pizzaIsGood && catFoodIsGood ); // false
console.log( pizzaIsGood && catFoodIsGood && pizzaIsGood ); // false
console.log( !pizzaIsGood ); //false
console.log( !pizzaIsGood && catFoodIsGood ); // false
console.log( 1 > 3, 2 < 3 ); // false true

// Truethey and Falsey
console.log( 1 == 1 ) // true
console.log( 1 == 2 ) // false
console.log( 1 == '1' ); true
console.log( 1 === '1' ); // false

console.log( 0 == false );
console.log( '' == false );
console.log( null == false );
console.log( undefined == false );


if( /* condition */ ) {
    then do awesome stuff
}



if( a > b ) {
    console.log('Monkeys on jupiter');
} else {
    console.log('Hooray for carrots!');
}

if( (a+b) > b ) {
    console.log('Monkeys on mars!');
} else {
    console.log('Hooray for pancakes!');
}

if ( a > b ) {
    console.log('Monkeys on venus!'); // 1
} else if ( d > b ) {
    console.log("Well that's weird..."); // 2
} else if( c != a ) {
    console.log("Woah, dude"); // 3
} else {
    console.log("I'm so confused..."); // 4
}

console.log(c > b);
console.log(typeof a, typeof c, typeof arr, typeof obj );
console.log(a.constructor, c.constructor, arr.constructor, obj.constructor );


console.log( (1/0)*3+'a' );
console.log( 'A'+ Math.pow(2,3)+4+2+'a'+2+4);

var a = 'a';
var b = 2;
var c = '3';
var d = 'four';
var arr = [];
var obj = {};


var thisIsCrazy = a;
// console.log(a, thisIsCrazy);

// var thisIsCrazier = a || b;
var thisIsCrazier = b && a;
var thisIsCraziest = (c > b) && typeof a === 'string' && 2 == b && b;

// console.log(thisIsCrazier);
// console.log(thisIsCraziest);
// console.log(1/0*0); // NaN

// console.log((c > b), typeof a === 'string', 2 == b, b);

var x = 1;
var x = undefined;
var y = 2;
var z = x || y;

console.log(z);
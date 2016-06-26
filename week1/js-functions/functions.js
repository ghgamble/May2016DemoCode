(function() {
  'use strict';

//GLOBAL SCOPE HERE

//pass by value
var a = 1
var b = a

//pass by reference
var c = {}
var d = c

//functional hoisting
helloWorld()
hiWorld()
//FUNCTION DECLARATION
function helloWorld(){
  //LOCAL SCOPE HERE
  var a = b

  console.log(a)
}

//function expression
var hiWorld = function (){
  var c = c
}
//anonymous function
// function(){
//
// }
// helloWorld.a = 3
console.log(a)

//constructor function
function Person(name, age){
  this.name = name
  this.age = age
}
function Person2(name, age){
  return {
    name: name,
    age: age
  }
}
//new ES6 class constructor syntax
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var tony = new Person("tony", 99)
var andrew = new Person2("andrew", 99)
var square =  new Polygon(10, 10);


}());

// Object Oriented Programming
//    Programming paradigm based on the creation / manipulation of objects

//  Why is OOP a good thing?
	// - What am i trying to work with?
	// 	vs
	// - invididual steps
	// Organization / Modularity vs list of instructions

// Objects
	// Objects have PROPERTIES
	// 	- Store : primitives, non-primitives
	// Objects also have METHODS
	// 	- Methods are functions
	// 	- Methods are CALLABLE properties

// Within OOP we use the concept of CLASSES
// A CLASS is like the blueprint for an object

// CATS
// hair length
// num of legs
// species
// name
// 1-10 entitlement

// BAD - cluttering up the global namespace, also hard to remember what vars go with what cat
// var catName = 'Poptart';
// var catName2 = 'Toaster Streudal';
// var catName3 = 'Cinnamon Bun';

// var catHairLength

// Create a CAT class constructor function
// 		How we define how the end object should look

// function Cat (name, hairLength, numLegs, species, entitlement){

// 	this.name 			= name;
// 	this.hairLength 	= hairLength;
// 	this.numLegs 		= numLegs;
// 	this.species 		= species;
// 	this.entitlement 	= entitlement;

// 	// Attaching a method in this manner is bad for memory!  Each time we construct a Cat instance, we are creating a NEW version of an identical function.  10k cats mean 10k functions => ~10kx memory
// 	// this.eat			= function(foodType){
// 	// 	console.log(this.name + " is eating " + foodType + ". Nom nom nom");
// 	// }

// 	Cat.allTheCats.push(this)
// }
// Cat.allTheCats = []
// Using a function as a constructor changes the way the function works
// NORMALLY - functions return undefined unless we return something

// AS A CONSTRUCTOR - functions return this

// this
// EVERY FUNCTION HAS ONE
// NORMALLY - this inside of a function is the OBJECT the function is ATTACHED to

// function myFunc(){
// 	console.log(this) 
// }
// myFunc() // window object
// new myFunc() // empty object
// AS A CONSTRUCTOR - this becomes an empty object and is implicitly returned

// Calling a function AS A CONSTRUCTOR is calling that function with the 'new' keyword

// ES6 / 2015 syntax
class Cat{
	constructor(name, hairLength, numLegs, species, entitlement){

		this.name 			= name;
		this.hairLength 	= hairLength;
		this.numLegs 		= numLegs;
		this.species 		= species;
		this.entitlement 	= entitlement;
	}

	eat(foodType){
		console.log(this.name + " eats the " + foodType);
	}
}

var poptart = new Cat('Poptart', 'Hairless', 1.5, 'Lion', 9);
var paul = new Cat('Paul', 'Short', 3.98, 'Tabby', 1);




// Challenge I - 
	// Create a User class constructor and give it the following properties : 
	// 		name
	// 		bestFriend
	// 		favoriteSandwich
	// Create 2 instances of that class with different values (log them!)

	// BONUS : Provide default values if an argument is missed / not passed in

// function User (name, bestFriend, favoriteSandwich){

// 	this.name 				= name || 'Nobody';
// 	this.bestFriend 		= bestFriend || 'Bill';
// 	this.favoriteSandwich 	= favoriteSandwich || 'Knuckle';

// }
// // Examples of falsey values : undefined, false, null, 0, ''

// var noone = new User(null, 'George Washington', 'Cubano');



// The way we want to attach methods to our class instances is different than just assigning a direct property
// All classes have a PROTOTYPE
// All class INSTANCES have a reference to the PROTOTYPE
// If we attach methods to the prototype, ALL of our instances can access it

// Cat.prototype.eat = function(foodType){
// 	// if(this.admin){

// 	// }
// 	// else{

// 	// }
// 	console.log(this.name + " is eating " + foodType + ". Nom nom nom");
// }



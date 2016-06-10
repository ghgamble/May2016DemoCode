// function Wizard (wizardInfo){
	// this.name = wizardInfo.name;
	// this.spells = wizardInfo.spells;
	// this.level = wizardInfo.level;
// }
// Wizard.prototype.castSpell = function(spellIndex){
// 	return this.name + ' casts ' + this.spells[spellIndex] + ' at the darkness.'
// }

// var harryPotter = new Wizard({
// 	name : 'Harry Potter',
// 	spells : ['Magic Missle', 'That one that makes Draco bleed in the bathroom'],
// 	level : 'yellow'
// });

// // harryPotter instanceof Wizard //true
// // harryPotter instanceof Object //true

// var draco = new Wizard({
// 	name : "Draco",
// 	spells : ['AbraKadabra'],
// 	level : 'white'
// });


// function Warlock (warlockInfo){
// 	Wizard.call(this, warlockInfo) // going to leverage the class constructor we already wrote to save us code
// 	// It will take 'this' from the Warlock constructor and add the relevant properties/values to that obj
// 	this.demonMaster = warlockInfo.demonMaster
// }

// // Setting the warlock proto EQUAL to the wizard proto just passes it by reference.  They are now the EXACT same prototype
// // Warlock.prototype = Wizard.prototype

// // This way sets up the proto to be able to LOOK at the wizard proto, but remain it's own object
// Warlock.prototype = new Wizard({});
// Warlock.prototype.constructor = Warlock;
// Warlock.prototype.commune = function(){
// 	return this.name + ' communes with ' + this.demonMaster + ' for moar powah!'
// }
// var tim = new Warlock({
// 	name : 'Tim',
// 	spells : ['Kill you', 'Eat soul'],
// 	level : 'purple',
// 	demonMaster : 'Greg`g'
// })
// // specific to JUST tim
// tim.doTimStuff = function(){
// 	console.log(this.name + ' does tim stuff')
// }

// ================================ \\
//  | | | | es6 | | | |
// ================================ \\

class Wizard{
	constructor(wizardInfo){
		this.name = wizardInfo.name;
		this.spells = wizardInfo.spells;
		this.level = wizardInfo.level;
	}
	castSpell(spellIndex){
		return this.name + ' casts ' + this.spells[spellIndex] + ' at the darkness.'
	}
}

var harryPotter = new Wizard({
	name : 'Harry Potter',
	spells : ['Magic Missle', 'That one that makes Draco bleed in the bathroom'],
	level : 'yellow'
});
var draco = new Wizard({
	name : "Draco",
	spells : ['AbraKadabra'],
	level : 'white'
});

class Warlock extends Wizard{
	constructor(warlockInfo){
		// Wizard.call(this, warlockInfo)
		super(warlockInfo);
		this.demonMaster = warlockInfo.demonMaster;
	}
	static something(){
		return 'yay!'
	}
	commune(){
		return this.name + ' communes with ' + this.demonMaster + ' for moar powah!'
	}
	get fullName(){
		return this.name + Math.random() + " Berkshire"
	}
	// Overriding an inherited proto method with one that calls the inherited proto plus some other things
	castSpell(spellIndex){
		var spellString = super.castSpell(spellIndex);
		return spellString + '\n It was super Warlocky.'
	}
}
var tim = new Warlock({
	name : 'Tim',
	spells : ['Kill you', 'Eat soul'],
	level : 'purple',
	demonMaster : 'Greg`g'
})
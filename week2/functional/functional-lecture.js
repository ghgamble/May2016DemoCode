// Functional Style Programming

var chooseOne = ['charmander','bulbasaur','squirtle'];

// var chooseOne = ['CHARMANDER','bulbasaur','squirtle'];
// var chooseOne = ['CHARMANDER','BULBASAUR','squirtle']; /// ....

// console.log(chooseOne);

// for( var i=0; i < chooseOne.length; i++ ) {
//     chooseOne[i]=chooseOne[i].toUpperCase();
// }

// console.log(chooseOne);

// What do I need to do to make sure I am coding in a functional style?
// 1. All of your functions must accept at least ONE parameter/argument.
// 2. All of your funtions must return data or another function.
// 3. No Loops!

function imperative( array ) {
    for( var i=0; i < array.length; i++ ) {
        array[i]=array[i].toUpperCase();
    }
    return array;
}

function changeToUpperCase(string) {
    return string.toUpperCase();
}
// this represents recursion
function makeUpperCaseArray(arrayOfStrings, upperCaseArray ) {
    var upperCaseWord = changeToUpperCase(arrayOfStrings[0]),
        remainingArray = arrayOfStrings.slice(1); //

    if( !upperCaseArray ) {
        upperCaseArray = [];
    }

    upperCaseArray.push(upperCaseWord);

    // console.log(arguments);
    if( remainingArray.length > 0 ) {
        return makeUpperCaseArray( remainingArray, upperCaseArray );
    } else {
        return upperCaseArray;
    }
}

// console.log(chooseOne);
// imperative(chooseOne);
// console.log(chooseOne);

// console.log(chooseOne);
// var newUpperCaseArray = makeUpperCaseArray(chooseOne);
// console.log(chooseOne, newUpperCaseArray);

// var a = [1,2,3,4,5];
// console.log(a.slice(1));

function makeUpperCaseMap( arrayOfStrings ) {
    return arrayOfStrings.map( change );
}


function makeUpperCaseMapAnon( arrayOfStrings ) {
    return arrayOfStrings.map(function(string) {
        return string.toUpperCase();
    });
}


// console.log(makeUpperCaseMap(chooseOne), chooseOne);
// console.log(imperative(chooseOne), chooseOne);

// makeUpperCaseArray(chooseOne);

var A = [1,2,3,4,5];

// Take an array, return a new array with
// double values using map.
function doubleNumber(number) {
    return number*2;
}
function doubleMyOddsOfWinningTheLottery(arrayToDouble) {
    return arrayToDouble.map(doubleNumber);
}

var C = doubleNumber(100);

var B = doubleMyOddsOfWinningTheLottery(A);

// console.log(C);
// console.log(A,B);


// Whitespace semicolon pitfall...
function whiteSpaceMatters( aPersonsName ) {
    return {
        name: aPersonsName
    };
}

function semiColonsMatter( aPersonsName ) {
    return;
    {
        name: aPersonsName
    };
}

// console.log( whiteSpaceMatters('Brandon'), semiColonsMatter('Brandon') );


// reduce
var myBankAccount = 900,
    myPurchases = [8.95, 21.45, 5.99, 19.87, 456.75];

function myPaycheck(runningTotal, purchase) {
    // console.log('each step:', runningTotal, purchase, (runningTotal - purchase));
    return Math.floor(runningTotal - purchase);
}

var finalResult = myPurchases.reduce(myPaycheck, myBankAccount);

// console.log(finalResult, myBankAccount, myBankAccount-finalResult);


// var total = 0;

// for(var i=0; i<myPurchases.length; i++) {
//     myBankAccount = myBankAccount - myPurchases[i];
//     myBankAccount -= myPurchases[i];
// }

// normal JS Obj
var jsObj = {
    name: "Brandon"
}

// filter
// JSON object
var instructors = [{
    "name": "Brandon",
    "job":"Intructor Master Flex",
    "isAvailable": true,
    "age": 10
},{
    "name": "",
    "job":"Intructor Master Flex",
    "isAvailable": true,
    "age": 20
},{
    "name": "Tony (the Tiger)",
    "job":"Intructor Master Flex",
    "isAvailable": false,
    "age": 25
}];

// (function())();

// var check = function(){};
// function check() {}
var count = 0;
var result = instructors.filter(function(instructorObj, count){
    // can you do it?!
    // complete this function such that the filter
    // function selects only available instructors
    //
    // hint: you must return a boolean value!
    // return instructorObj.isAvailable === false;
    // return !instructorObj.isAvailable;
    // return instructorObj.name !== undefined;
    // return instructorObj.name && instructorObj.age < 19 && instructorObj.job.length > 3;
    // return;
});

// console.log(result);
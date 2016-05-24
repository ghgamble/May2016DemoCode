var chooseOne = {
        pokemon: ['charmander','bulbasaur','squirtle'],
        turtles: ['michelangelo','leonardo','donatello','raphael']
    },
    nowTheyAreUpperCase = [];

for( var i=0; i<chooseOne.length; i++ ) {
    nowTheyAreUpperCase[i] = chooseOne.pokemon[i].toUpperCase(); // mutates original array
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(chooseOne);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var thisIsNotImmutable = ['lions','tigers','bears','oh-my!'];

function arrayToUppercase( arrayOfStrings ) {
    var upperCaseArray = [],
        i = arrayOfStrings.length;

    while( i-- ) {
        upperCaseArray[i]=arrayOfStrings[i].toUpperCase();
    }

    return upperCaseArray;
}

var thisArrayIsNowUppercase = arrayToUppercase( thisIsNotImmutable );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(chooseOne, thisArrayIsNowUppercase);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function handler( fn ) {
//     fn('things!');
// }
// handler(function(string){ console.log(string); });

function whiteSpaceMatters( name ) {
    return {
        name: name
    }
}

function whiteSpaceDoesNotMatter( name ) {
    return
    {
        name: name
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log( whiteSpaceMatters('Yes it does'), whiteSpaceDoesNotMatter('No, actually it really does') );
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getUpperString( arrayOfStrings ) {
    return arrayOfStrings[0].toUpperCase();
}
function stringToUpperCase( string ) {
    return string.toUpperCase();
}
function makeUpperCaseArray( arrayOfStrings, upperCaseArray) {
    if( upperCaseArray === undefined ) {
        upperCaseArray = [];
    }

    upperCaseArray.push( getUpperString( arrayOfStrings ) );

    var remainingArray = arrayOfStrings.slice( 1 );

    if( remainingArray.length > 0 ) {
        return makeUpperCaseArray( remainingArray, upperCaseArray );
    } else {
        return upperCaseArray;
    }
}
function makeUpperCaseMap( arrayOfStrings ) {
    return arrayOfStrings.map( stringToUpperCase );
}

var newUpperCaseArray = makeUpperCaseArray( chooseOne.pokemon );
var newUpperCaseMap = makeUpperCaseMap( chooseOne.pokemon );

console.log( newUpperCaseArray, newUpperCaseMap );
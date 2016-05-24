# Functional Style Programming


## Preface
---
What does it mean when program is written in a "Functional style?"

Functional style programming is often explained using phrases like "functions as first-class objects" and "eliminating side effects". To programmers just starting their JS journey, statements like these can be daunting!

There are really only two concepts that need to be understood to get a handle onthe "functional style".
* Immutability (do not make changes to the original structure)
* Statelessness (should perform a task as if it were the first time, keeps no state between calls [static])

In the simplest terms, the real benefit of adopting a functional style is that our programs can be broken down into smaller, simpler pieces that are both more reliable and easier to understand.

## Functional vs Imperative
---

### Imperative

```javascript
  var chooseOne = ['charmander','bulbasaur','squirtle'];

  console.log(chooseOne);

  for( var i=0; i<chooseOne.length; i++ ) {
      chooseOne[i]=chooseOne[i].toUpperCase(); // mutates original array
  }

  console.log(chooseOne);
```

### Functional

1. All of your functions must accept at least one argument.
2. All of your functions must return data or another function.
3. No loops!

```javascript
    function getUpperString( arrayOfStrings ) {
        return arrayOfStrings.pop().toUpperCase();
    }
    function makeUpperCaseArray( arrayOfStrings, upperCaseArray ) {
        var upperCaseString = getUpperString( arrayOfStrings ),
            remainingArray = arrayOfStrings.slice( 1 );

        if( upperCaseArray === undefined ) {
            upperCaseArray = [];
        }

        upperCaseArray.push( upperCaseString );

        if( remainingArray.length > 0 ) {
            return makeUpperCaseArray( remainingArray, upperCaseArray );
        } else {
            return upperCaseArray;
        }
    }
    var thisArrayIsNowUppercase = arrayToUppercase( chooseOne );

    console.log(chooseOne, thisArrayIsNowUppercase);
```

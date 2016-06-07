# Introduction to JS

## Preface
> A programming language is a language that lets you give instructions to a computer.

In English, we write **SENTENCES**, composed of **WORDS**, which have **TYPES** (noun, verb).

In JavaScript, we write **STATEMENTS**, composed (mostly) of **VALUES**, which have **TYPES** (Number, String).

As far as punctuation goes in this analogy, the `;` is the period of a sentence.

### Comments
Comments give developers the ability to write sentences in a spoken language (English, etc);

In JS, there are two ways to write comments:

```javascript
    // use double forward slashes for a single line comment
    /*
        forward slash followed by an asterisk will open a multi-line comment,
        and an asterisk will close a multi-line comment
     */
```

Comments are amazing! Write tons of them!

### Variables
Variables refer to values. Variables are created with the keyword `var` and assigned with the `=` operator.

```javascript
    var foo;
    var iLikeCamels = 1;
    var snakes_are_awesome = 'snakes';
```

#### Valid variable names
A variable name must start with a letter, underscore, or $. After the first character, it can also have numbers.
* Valid
    - foo
    - result
    - result2
    - __secret
    - $$billz
* Invalid
    - 2fast2furious
    - me&you
    - 0
    - awesome-things-and-stuff

## Primitive Types
```javascript
    Number // integers, decimals
    String // characters
    Boolean // true/false
    null (defined with a value of nothing)
    undefined (not even defined)
```

### Numbers
In JS, a `Number` can be represented as an `integer` or a `float`.

#### Literals
Single most straight forward way to represent a number.
```javascript
    2 // deuce
    3.14159265359 // mmm, pi...
    1e6 // 1,000,000
```

#### PEMDAS (order of operations)
Determines the order that math happens in.

#### Operators
Lets you combine 1 (unary), 2 (binary) or 3 (ternary) values (operands) to produce a new values.
```javascript
    + // addition, concatenation
    - // subtraction
    * // multiplication, generators (advanced topic)
    / // division
    % // modulus
```

### Strings
In JS, a `String` is a series of characters and can be empty (0 characters) up to potentially unlimited (though constrained by hardware).

#### Literals:
```javascript
    'a'
    '1'
    'cats'
    'hello!'
    'Man, donuts sound great right about now...'
    "A witty saying proves nothing."
    'don\'t do this' // backslash ESCAPES the apostrophe, avoid escapes if at all possible (cleanliness)
    "Instead, use doubles quotes to escape contractions like don't, won't, and couldn't (but I still did)"
```

#### Operators
```javascript
    + // concatenation
```

#### Properties
Strings are Objects
    - because strings are Objects, they have accessible properties on them
    - you can access object properties using the `.` (dot notation)
    - all strings have a 'length' property, which tells you how long the string is
    - all strings have numerical indexes, which tell you what letter is at a particular location

```javascript
    var s='string';
    s.length; // 6
    var s='string';
    s[0]; // 's'
    s[1]; // 't'
    // ...
```

### Booleans
In JS, booleans are all about logic
* Literals
    ```true || false```
* Operators

```javascript
    ! not
    != not equal
    == is equal
    === is literally equal
    && and
    || or
    < less than
    <= less than or equal to
    > greater than
    >= greater than or equal to
```

## Conditional statements
If statements are used to control conditions within the logic of your code.

### If

##### Example
If I drink 3 cups of espresso, my eyes will twitch.

```javascript
    var cups = 3;
    if( cups === 3 ) {
        console.log("Time to cut back...");
    }
```

### Else
Most of the time, you will likely have chains.

If else-chains:
* start with exactly one if-statement
* can have zero to infinite else-if statements
* can have zero or one else statement ( but it is often better to include an else )

```javascript
    var cups = 0;
    var shots = 1;
    cups = shots * 3;
    if( cups > 3 ) {
        console.log("Time to cut back...");
    } else if ( cups > 3 ) {
        console.log("Oy! My twitchin' eyes!");
    } else {
        console.log('Yay! I can read clearly!');
    }
```

### Truthey && Falsey values
In JS, there are several values that are considered falsey (resolves as false within `if` conditional statements):
* 0 and NaN are falsey. all other numbers are truthey.
* '' is falsey. all other strings are truthey.
* `null` && `undefined` are always falsey.
* all other values are truthey.
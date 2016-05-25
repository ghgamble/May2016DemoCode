## Callback functions

### What is a callback function?
> A callback function is one that is passed into ANOTHER function as an argument.

Callbacks typically:
* are used to perform an operation AFTER something happens
* heavily used in event based and asynchronus programming

#### Defining a NAMED Callback function

```javascript
    function buttonClicker(days){
        return function(){
            days.reduce(function(memo, el){
                console.log(memo, el);
            }, 30);
        }
    }
    button.addEventListener('click', buttonClicker(days))
```

#### Try It!
1. Write a function called `Namer` that accepts the following arguments :
   * firstName
   * lastName
   * callback

2. Write the callback function to be passed into `Namer`. It should:
    * accept an argument `fullName` whose value is a String that is the concatination of the first and last names from `Namer`
    * the callback function should `console.log` the `fullName`

3. Call Namer with arguments and pass in the callback

```javascript
    // constructor function
    function Namer (firstName, lastName, callback){
        return callback(firstName, lastName)
    }
    // sweet callback
    function nameJoiner (firstName, lastName){
        return firstName.concat(' ', lastName);
    }
    // another approach
    function ArrayNamer (names, callback) {
        return callback(names)
    }
    function arrayNameJoiner(names) {
        return names.join(' ');
    }
    var fullName = Namer('Tony', 'Montana', nameJoiner);
    var fullName2 = ArrayNamer(['Brandon','Dante','Jimenez'], arrayNameJoiner);
    console.log(fullName);
    console.log(fullName2);
```

## Timing functions
In JavaScript, timing functions are fundamental tools to use when you need a counter, timer, or the ability to repeatedly call on a function.

``` javascript
    var intervalDelay = 1000; // 1000 ms == 1 second
    var intervalId = setInterval(function(){
        console.log('Hello!');
    }, intervalDelay);
    var timeoutDelay = 5000; // 5 seconds
    var timeoutId = setTimeout(function(theIntervalIdThatWasPassedIn){
        clearInterval(theIntervalIdThatWasPassedIn);
    }, timeoutDelay, interval)
```
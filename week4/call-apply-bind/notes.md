## Call, Apply, Bind
> Ability to force a context (change scope) when calling a function

`this` is NOT inherited like scope. It remains fixed at the window until it is shifted in certain ways

### Metaphor:
Pick two people (guy and girl). When the girl says "I throw coconuts," the "I" refers to her. When the guy references the sentence, "I" refers to him and the context of the girl is lost. If you just find a piece of paper that says "I throw coconuts" on the ground, there is no context, you have no idea who that is.

#### Seeing "this" in an object declaration:
```javascript
    var counter = {
        iteration: 0,
        increment: function(){
            this.iteration++;
        }
    };
```

#### Seeing how "this" is not inherited or retained in all cases:
```javascript
    var inc = counter.increment; inc()
    increment: function(){
        var inc = function(amt){
            this.x += amt;
        };
        inc(1);
    }
```

#### Forcing context with call or apply:
```javascript
    var printPerson = function(){
            console.log(this.name);
        },
        person1 = {name: "Chris"},
        logEmAll = function(){
            [].forEach.call(arguments, function(element){
                console.log(element);
            });
        },
        myObj = {};
    // tests
    printPerson();
    printPerson.call(person1);
    printPerson.apply(person1);
    [].push.call(myObj, 'data');
```

#### Difference between call and apply:
* Call requires parameters to function to be separate

    ```javascript
        var max = Math.max.call(null, 1, 2, 5);
    ```
* Apply requires parameters to be passed as an array

    ```javascript
        var vals = [1,5,2,6,10];
        var max = Math.max.apply(null, vals);

        // note: often used with `arguments` in a function call;
        function max() {
            console.log(arguments);
            return Math.max.apply(null, arguments);
        }
    ```


#### Using "bind":
* Works much like the closure example of (add5/add10)
* Can also set a context on a function call with preset values

    ```javascript
        var fn = function(){console.log(this);}
        var ctx = {a: 10};
        var caller = fn.bind(ctx);
        caller();
        // (navigator demo)
        getUserMedia = getUserMedia.bind(navigator);
    ```

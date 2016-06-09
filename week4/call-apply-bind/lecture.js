// Call(context {}, param1, params2, ...)
// Apply(context {}, [param1, param2, ...])
// Bind(this, param1, params2, ...)

// These functions help you control and change context (this)

// function Person() {
//     this;
//     var a = function () {
//         this;
//     }
// }

// Person.call
// Person.apply
// Person.bind
// person is also an object as i is a function

// var counter = {
//     iteration: 0,
//     increment: function() {
//         this.iteration++;
//     }
// };

// console.log(counter);

// counter.increment();

// console.log(counter);

// var counter = {
//     iteration: 0,
//     increment: function() {
//         var inc = function (amt) {
//             this.iteration += amt;
//         }
//         // inc(1);
//         inc.call(this, 1);
//     }
// };

// counter.increment();

// console.log(counter);

// call(context, param1, param2 ...)

// CALL

// function Caller(name) {
//     this.name = name;
// }
// function Person(name) {
//     this.name = name;
// }

// Person.prototype = {
//     hello: function(name) {
//         console.log("Hi! I'm", name||this.name);
//     }
// }

// var caller = new Caller('Brandon');
// var person = new Person('Flanders');

// Person.call(caller, 1,'two', { three: 3 });
// console.log(caller, person);

// person.hello();
// person.hello.call(caller);
// person.hello.call(caller, "Homer" /*, param ... */);

// APPLY

// .apply(context, [])

// function seeMyArguments() {
//     console.log(arguments);
// }

// seeMyArguments(1)
// seeMyArguments(1, ['hello'])
// seeMyArguments(1, {
//     things:'stuff'
// });

// var vals = [1,5,13,27,33,48,69];
// var max = Math.max.apply(null, vals);

// function maximum() {
//     return Math.max.apply(null, arguments[0]);
// }

// max(vals);

// var max = maximum(vals);

// console.log(max);
// function max() {}

// function Caller(name) {
//     this.name = name;
// }
// function Person(name) {
//      this.name = name;
//      return function() {}
// }

// Person.prototype = {
//     hello: function(name) {
//         console.log("Hi! I'm", name||this.name);
//     }
// }

// var caller = new Caller('Brandon');
// var person = new Person('Flanders');

// Person.bind(caller);
// person.hello();


// var vals = [1,5,13,27,33,48,69];
// var max = Math.max.apply(null, vals);

// function maximum() {
//     return Math.max.apply(null, arguments[0]);
// }
// var showMeTheMoney = function ( val1, val2, val3, val4 ) {
//     console.log( val1, val2,val3, val4 );
// }
// var emptyObject = {}
// showMeTheMoney(1,2,3,4);
// var showMeTheMoney2 = showMeTheMoney.bind(emptyObject, 'a', 1);
// showMeTheMoney2(5,6);

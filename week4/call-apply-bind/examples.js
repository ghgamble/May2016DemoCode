// var counter = {
//         iteration: 0,
//         increment: function(){
//             this.iteration++;
//         }
//     };

// counter.increment = function(){
//     var inc = function(amt){
//         this.x += amt;
//     };
//     inc(1);
// }

// var inc = counter.increment;
// inc();

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
function Namer(firstName, lastName, callback) {
    callback(firstName, lastName);
}

function nameJoiner( firstName, lastName ) {
    // var fullName = firstName + ' ' + lastName;
    var fullName = firstName.concat(' ', lastName);
    console.log(fullName);
    return fullName;
}

Namer('Tony','Montana', nameJoiner);

// var intervalId = setInterval(callback, delay, [parameters...]);

var count = 0;

var intervalCounterId = setInterval(function(){
    console.log(Date.now());

    if( count === 3 ) {
        clearInterval(intervalCounterId);
    } else {
        count++;
    }
}, 1000);


var intervalId = setInterval(function(){
    console.log(Date.now());
}, 1000); // every second (ms);

var timeoutId = setTimeout(function(){
    clearInterval(intervalId);
}, 5000); // 5 sasdfeconds;

for(var i=0; i<10; i++) {
    // (function(j){ // using iffy
    setTimeout(function(j){ // using setTimeout
        console.log(i);
    }, 1000*i, i);
    // })(i);
}
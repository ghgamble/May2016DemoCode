var promise = new Promise(function(resolve, reject){
    var random = Math.round(Math.random()*100)
    if( random > 5 ) {
        resolve( random )
    } else {
        reject({
            message: 'You. You have failed. Muahahahaha.'
        })
    }
});

promise.then(function(data){
    console.log('first then:', data)
    return data + 1
}).then(function(data){
    console.log('second then:', data)
})
.catch(function(error){
    console.log(error)
})

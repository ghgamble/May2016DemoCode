var promise = new Promise(function(resolve, reject){
    // API.call({
    //     url: 'http://twitter.com/api'
    // }, (error, data) => error ? reject(error) : resolve(data))

    API.call({
        url: 'http://twitter.com/api'
    }, function(error, data) {
        // if(!error) {
        //     resolve(data)
        // } else {
        //     reject(error)
        // }

        switch( error.code ) {
            case 400:
                reject(badRequestErrorHandler(error))
            case 403:
                reject(forbiddenErrorHandler(error))
            case 404:
                reject(notFoundErrorHandler(error))
        }
    })
});

promise.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error);
})

function badRequestErrorHandler(error) {
    console.log('Bad Request!', error)
    return error;
}
function forbiddenErrorHandler(error) {
    console.log('Forbidden!', error)
    return error;
}
function notFoundErrorHandler(error) {
    console.log('API call not found!', error)
    return error;
}

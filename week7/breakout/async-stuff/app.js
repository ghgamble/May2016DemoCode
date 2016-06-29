var request=require("request");

// var names = []
// var pendingRequests = 0
// var getXKCD = function(){
//     request('http://xkcd.com', function (error, response, html) {
//         // console.log(response.request.host)
//         names.push(response.request.host)
//         pendingRequests--
//         if ( pendingRequests === 0 ) {
//             finish()
//         }
//     })
// }
// var getGoogle = function(){
//     request('http://google.com', function (error, response, html) {
//         // console.log(response.request.host)
//         names.push(response.request.host)
//         pendingRequests--
//         if ( pendingRequests === 0 ) {
//             finish()
//         }
//     })
// }
// var getGithub = function(){
//     request('http://github.com', function (error, response, html) {
//         // console.log(response.request.host)
//         names.push(response.request.host)
//         pendingRequests--
//         if ( pendingRequests === 0 ) {
//             finish()
//         }
//     })
// }

// var finish = function(){
//     console.log(names)
// }

// var asyncFunctions = [getXKCD, getGithub, getGoogle]
// var pendingRequests = asyncFunctions.length

// asyncFunctions.forEach(function(func){
//     func()
// })






var getXKCDPromise = new Promise(function(resolve, reject){
    request('http://xkcd.com', function (error, response, html) {
        if ( error ) { reject(error) }
        // console.log(response.request.host)
        resolve(response.request.host)

    })
})
var getGithubPromise = new Promise(function(resolve, reject){
    request('http://github.com', function (error, response, html) {
        // console.log(response.request.host)
        resolve(response.request.host)

    })
})
var getGooglePromise = new Promise(function(resolve, reject){
    request('http://google.com', function (error, response, html) {
        // console.log(response.request.host)
        resolve(response.request.host)

    })
})
var promises = [getXKCDPromise, getGithubPromise, getGooglePromise]
var finishPromises = function(data){
    console.log('data?', data) // data is a single array
    return data
}


// resolving a single promise
// getGithubPromise.then(function(data){
//     console.log(data)
// })

// promise.all gives you an ARRAY of the resolved values
Promise.all(promises).then(finishPromises).then(function(data){
    console.log('and then....', data)
})
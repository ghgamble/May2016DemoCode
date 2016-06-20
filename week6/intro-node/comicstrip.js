// comicstrip.js

// Pull in our third party module
var request = require('request');

// create HTTP GET request
request.get(
    "http://xkcd.com", 
    function(err, response, body){
        if(err){
            // Handle it
            console.log("Err : ", err)
            return
        }
        
        // TCOB
        console.log("BODY : ", body)
            
        
    }
)
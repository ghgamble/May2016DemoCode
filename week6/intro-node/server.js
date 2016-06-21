// server.js

// require the http CORE module
var http = require('http');
var requester = require("request")

var server = http.createServer(
    function(request, response){

        requester.get(
            "http://xkcd.com",
            function(err, res, body){

                response.writeHead(200, {
                    "Content-Type" : "text/html"
                })
                response.end(body)

            }
        )

        // response.writeHead(200, {
        //     "Content-Type" : "text/plain"
        // })
        // response.end("<h1> Hello! </h1>")
    }
)

server.listen(process.env.PORT || 3000);
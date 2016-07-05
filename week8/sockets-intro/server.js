var port = process.env.PORT || 3000
var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

// Twitter API require
var tw = require('node-tweet-stream')({
    consumer_key : "a5eUsKWCYu80g4vqBWs1NMu1e",
    consumer_secret : "mI7Wl807nO1sCYocoJpwt77fz9f3GEf72wrlpr9KvCz7swMWxq",
    token : "1633700352-336sqlYy4B8XmXNf1fj3EMJQGUVNHAK8S8lmdiq",
    token_secret : "rmxd33IYWJEdqn19cWgnlrRSDI5HyWccomd9oyOfYk61z"
});
// Which tweets to track
tw.track('trump');



app.get('/', function(req, res){

    res.sendFile("main.html", {root : "./public"})

})

app.server = app.listen(port)

// SocketIO require
var io = require('socket.io');

// Let socket.io listen in on our server
var socketServer = io(app.server)

// Listen for the socket connection event
socketServer.on('connection', function(socket){
    console.log('Received a socket connection event!');

    // When we receive a tweet, emit that tweet as a socket message
    tw.on('tweet', function(tweetData){

        // Emitting a socket event named 'tweet' with data attached
        socket.emit('tweet', tweetData);
    });

})
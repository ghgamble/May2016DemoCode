// Creating the socket connection to the server
var socket = io();

// Listening for the 'tweet' socket event emitted by the server
socket.on("tweet", function(data){
    console.log(data)
    document.body.innerText += data.text + '\n'
})
// Creating the socket connection to the server
var socket = io();

// Listening for the 'tweet' socket event emitted by the server
// socket.on("tweeter", function(data){
//     console.log(data)
//     document.body.innerText += data.text + '\n'
// })

// button.addEventListener('click', function(){})

setInterval(function(){
	socket.emit('number', Math.random())
}, 6000)

socket.on('newNumber', function(data){
	document.body.innerText += data + '\n'
})
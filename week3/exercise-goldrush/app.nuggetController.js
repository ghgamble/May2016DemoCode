angular.module('GoldRush')
	.controller('nuggetController', nugCtrl)

function nugCtrl(){

	var nug = this;
	// console.log('!');
	nug.markers = []; // This will be our marker collection

	nug.createMarker = function(event){
		// Accessing the event object
		console.log(event);
		var coordX = event.pageX;
		var coordY = event.pageY;

		// Create a new marker
		var newMarker = {
			x : coordX,
			y : coordY
		}
		// Push into array of markers
		nug.markers.push(newMarker);
	}
}
angular.module('GoldRush')
	.controller('nuggetController', nugCtrl)

function nugCtrl(){

	var nug = this;
	// console.log('!');
	nug.markers = []; // This will be our marker collection
	nug.addingTooltip = false; // Decides whether or not our tooltip form is showing

	// Triggered by our ngClick on the map
	nug.createMarker = function(event){
		// Accessing the event object
		console.log(event);
		var coordX = (event.pageX - 20) / document.body.clientWidth;
		var coordY = (event.pageY - 20) / document.body.clientHeight;
		// Create a new marker
		var newMarker = {
			x : coordX * 100,
			y : coordY * 100
		}
		// Push into array of markers
		nug.markers.push(newMarker);

		console.log(nug.markers)

		nug.addingTooltip = true;
	}

	nug.removeMarker = function(marker){
		nug.markers.splice(nug.markers.indexOf(marker), 1);

	}

	// submitting tooltip and attaching it to the marker
	nug.addTooltip = function(){
		nug.markers[nug.markers.length - 1].tooltip = nug.tooltipText;
		nug.tooltipText = '';
		nug.addingTooltip = false;
	}
}
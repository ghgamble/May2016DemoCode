(function(){
	angular.module("kittiesApp")
		.controller("KittiesController", KittiesController);

		function KittiesController(){

			var self = this;
			self.destroy = function(cat){
				console.log("clicked on cat:" ,cat);
				self.kittiesList.splice(cat,1)
			}

			self.kittiesList =
			[
						{
							catName: 'Karl',
							monthsOld: 5,
							gender: 'boy',
							image: "images/carl.png",
							adopted: false,
							friends: ["Jack", "Oscar"]
						},
						{
							catName: 'Jack',
							monthsOld: 4,
							gender: 'boy',
							image: "images/jack.png",
							adopted: false,
							friends: ["Karl", "Oscar"]
						},
						{
							catName: 'Oscar',
							monthsOld: 2,
							gender: 'boy',
							image: "images/oscar.png",
							adopted: false,
							friends: ["Oscar", "Princess Mew"]
						},
						{
							catName: 'Princess Mew',
							monthsOld: 3,
							gender: 'girl',
							image: "images/princessmew.png",
							adopted: false,
							friends: []
						}

				];

		};
})();

// myApp.controller("KittiesController", function($scope){
	// $scope.kittiesList = [{}];
// })

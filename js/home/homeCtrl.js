var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamService){

	$scope.getAllData = function() {
		teamService.getTeamData('utahjazz').then(function(response) {
			$scope.jazzData = response;
		})
		teamService.getTeamData('losangeleslakers').then(function(response) {
			$scope.lakersData = response;
		})
		teamService.getTeamData('miamiheat').then(function(response) {
			$scope.heatData = response;
		})
	}();
});

(function() {
	function timerDuration($document, $interval){
		return {
			templateUrl: "/templates/directives/timerDuration.html",
			//template: "<h1>hello world</h1>",
			restrict: "E",
			scope: {},
			controller: 'TimerCtrl',
			controllerAs: 'timer',
			link: function(scope,element,attributes) {
				
			
			}
		};
	}
	
	angular	
		.module('blocTime')
		.controller("TimerCtrl", ["$interval", function($scope){
			console.log('working');
			$scope.count = 25;	
				
			//$scope.startTimer = $interval(function(){
				//$scope.count = $scope.count -1;
			//},100);
			
			$scope.isRunning = false;
			
			
			$scope.startTimer = function(){
				console.log('working in startTimer()');
				//if ($scope.count >= 0){
					//console.log('working in the if');
					$scope.isRunning = true;
					//$interval(function(){
					//$scope.count = $scope.count -1;
					//},1000);
				//}
					//$scope.count = 25;
			};
			$scope.resetTimer = function(){
				 //stop timer and reset to 25
				$scope.isRunning = false;
				$scope.count = 25;
			};
	}])
		.directive("timerDuration",['$document', '$interval',timerDuration]);
	
})();
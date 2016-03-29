(function() {
	function timerDuration($document, $interval){
		return {
			templateUrl: "/templates/directives/timerDuration.html",
			//template: "<h1>hello world</h1>",
			restrict: "E",
			scope: {},
			//require: 'TimerCtrl',
			link: function($scope,element,attributes, controller) {
		
				$scope.count = 25;	
			//$scope.startTimer = $interval(function(){
				//$scope.count = $scope.count -1;
			//},100);
			
			$scope.isRunning = false;
			
			
			$scope.startTimer = function(){
				
				if ($scope.count >= 0){
					
					console.log('working in the if');
					$scope.isRunning = true;
					
					$scope.timer = $interval(function(){
						$scope.count = $scope.count -1;
							if ($scope.count == 0){
								$scope.resetTimer();
							}
						},1000);
					}
					$scope.count = 25;
			};
			
			$scope.resetTimer = function(){
				 //stop timer and reset to 25
				$scope.isRunning = false;
				$interval.cancel($scope.timer);
				$scope.count = 25;
			
			}
		}
	}
}
	
	angular	
		.module('blocTime')
		.controller("TimerCtrl", ["$interval", function($scope){
			console.log('working');
			
		
	}])
		.directive("timerDuration", timerDuration);
	
})();
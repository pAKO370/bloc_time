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
			$scope.onBreak = false;
			
			$scope.startTimer = function(){
				
					$scope.isRunning = true;
					
				
					$scope.timer = $interval(function(){
						$scope.count = $scope.count -1;
							if ($scope.count == 0){
								$scope.resetTimer();
								$scope.count = 5;
								$scope.onBreak = true;
							}
						},500);
			};
			
			$scope.breakTime = function(){
				$scope.isRunning = true;
				
				$scope.timer = $interval(function(){
						$scope.count = $scope.count -1;
							if ($scope.count == 0){
								$scope.resetTimer();
								$scope.count = 25;
								$scope.onBreak = false;
							}
						},500);
			}	
			
				
			$scope.resetTimer = function(){
				 //stop timer and reset to 25
				$scope.isRunning = false;
				$scope.onBreak = false;
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
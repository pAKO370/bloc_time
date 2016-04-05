(function() {
	function timerDuration($document, $interval){
		return {
			templateUrl: "/templates/directives/timerDuration.html",
			//template: "<h1>hello world</h1>",
			restrict: "E",
			scope: {},
			//require: 'TimerCtrl',
			link: function($scope,element,attributes, controller) {
		
				$scope.count = 1500;
				
				var ding = new buzz.sound("/assets/audio/Elevator.mp3", {
					preload: true
				});
			
			$scope.isRunning = false;
			$scope.onBreak = false;
			$scope.workSessions = 0;
				
			$scope.startTimer = function() {
					
				
					$scope.isRunning = true;
					$scope.timer = $interval(function(){
						console.log($scope.workSessions);
						$scope.count = $scope.count -1;
							if ($scope.count == 0){
						
								$scope.resetTimer();
								$scope.count = 300;
								$scope.onBreak = true;
								$scope.workSessions ++;
								if ($scope.workSessions == 5){
									$scope.workSessions = 0;
								}
								
							}
						},1000);
				
			};
			
			$scope.breakTime = function(){
				$scope.isRunning = true;
				
				$scope.timer = $interval(function(){
						$scope.count = $scope.count -1;
							if ($scope.count == 0){
							
								$scope.resetTimer();
								$scope.count = 1500;
								$scope.onBreak = false;
								
								if ($scope.workSessions == 4) {
									$scope.count = 30;
									
								}
							}
						},1000);
			}	
			
				
			$scope.resetTimer = function(){
				 //stop timer and reset to 25
				$scope.isRunning = false;
				$scope.onBreak = false;
				$interval.cancel($scope.timer);
				$scope.count = 1500;
			
			}
			$scope.$watch('count', function(newVal){
				
				if (newVal == 1) {
					ding.play();
				}
			});	
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
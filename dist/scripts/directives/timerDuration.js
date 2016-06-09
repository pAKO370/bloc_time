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
			$scope.counter = 0;
				
			$scope.startTimer = function() {
					var test = document.getElementById('cont1');
					//console.log(test);
					console.log(test.style.background);
				
					console.log($scope.workSessions);
					$scope.isRunning = true;
					$scope.timer = $interval(function(){
						$scope.count = $scope.count -1;
						$scope.counter += 1;
						/*if($scope.counter == 60){
							console.log('reset');
							document.getElementById('cont1').style.background = 'red';
							document.getElementById('cont2').style.background = 'red';
							document.getElementById('wrapper').style.background = 'white';
							
						} */
						console.log($scope.counter);
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
						document.getElementById('cont1').style.animation = ('rotate-bg-1 60s infinite linear');
						document.getElementById('cont2').style.animation = ('rotate-bg-2 60s infinite linear');
						
			};
			
			$scope.breakTime = function(){
				$scope.isRunning = true;
				document.getElementById('cont1').style.animation = ('rotate-bg-1 60s infinite linear');
				document.getElementById('cont2').style.animation = ('rotate-bg-2 60s infinite linear');
				$scope.timer = $interval(function(){
						$scope.count = $scope.count -1;
							if ($scope.count == 0){
								$scope.resetTimer();
								$scope.count = 1500;
								$scope.onBreak = false;
								
								if ($scope.workSessions == 4) {
									$scope.count = 1800;
									
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
				document.getElementById('cont1').style.animation = ('rotate-bg-1 60s 0 linear');
				document.getElementById('cont2').style.animation = ('rotate-bg-2 60s 0 linear');
				document.getElementById('cont1').style.animation = '';
				document.getElementById('cont2').style.animation = '';
			
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
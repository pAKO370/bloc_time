(function() {
	function timerDuration($document){
		return {
			template: '/templates/directives/timerDuration.html',
			replace: true,
			restrict: 'E',
			scope: {},
			link: function(scope,element,attributes) {
				var count = 25;
				
				var countDown = $interval(function(){
					scope.count = scope.count -1 ;
				},100);
			}
			
		};
	}
	
	angular	
		.module('blocTime')
		.directive('timerDuration',['$document', '$interval',timerDuration]);
	
})();
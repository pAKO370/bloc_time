(function(){
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});
		
		$stateProvider
			.state('timer', {
			url: '/',
			templateUrl: '/templates/timer.html',
			controller: 'TimerCtrl as timer'
			
		});
		
	}
	

angular 
	.module("blocTime", ["ui.router"])
	.config(config);

})();
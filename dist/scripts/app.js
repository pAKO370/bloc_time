(function(){
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});
		
		$stateProvider
			.state('landing', {
			url: '/',
			templateUrl: '/templates/landing.html'
		})
			.state('home', {
			url: '/home',
			templateUrl: '/templates/home.html',
			controller: 'HomeCtrl as home'
			
		});
		
	}
	

angular 
	.module("blocTime", ["ui.router","firebase"])
	.config(config);

})();
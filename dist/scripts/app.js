(function(){
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});
		
		$stateProvider
			.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'HomeCtrl as home'
			
		});
		
	}
	

angular 
	.module("blocTime", ["ui.router","firebase"])
	.config(config);

})();
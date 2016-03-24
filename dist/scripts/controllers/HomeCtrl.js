(function() {
	function HomeCtrl(){
		this.timerDuration = 25;
		
	
	}
	angular
		.module('blocTime')
		.controller('HomeCtrl',HomeCtrl);
	
})();
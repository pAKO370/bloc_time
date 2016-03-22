(function() {
	function TimerCtrl(){
		this.timerDuration = 25;
		
		this.startTimer = function(){
			// start timer and use directive
			timerDuration($interval= function(){
				timerDuration = timerDuration - 1;
				return timerDuration;
			},100)
			
		};
		this.resetTimer = function(){
			// stop timer and reset to 25
		};
	}
	angular
		.module('blocTime')
		.controller('TimerCtrl',TimerCtrl);
	
})();
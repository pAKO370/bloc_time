(function() {
	function HomeCtrl(Tasks){	
	
		this.tasks = Tasks.all;
		
		this.addTask = function() {
			this.tasks.$add(this.task);
			this.task = "";
		};
		this.removeTask = function() {
			this.tasks.$remove(this.task);
		};
		
	}
	angular
		.module("blocTime")
		.controller("HomeCtrl", ["Tasks", HomeCtrl]);
	
})();
(function(){
	function Tasks($firebaseArray){
		
		var firebaseRef = new Firebase('https://bloctimeapp.firebaseIO.com');
		
		var tasks = $firebaseArray(firebaseRef);
		
		return {
			all: tasks
		};
	}

	angular
		.module("blocTime")
		.factory("Tasks", ["$firebaseArray",Tasks]);
	
})();
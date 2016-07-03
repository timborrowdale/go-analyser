angular.module('goAnalyser')
	.factory("pipeline_groups", pipelineGroups);
	
pipelineGroups.$inject = ['$http'];
	
function pipelineGroups($http) {
	
	return {
		get: get
	};
	
	function get() {
		return $http.get("http://localhost:8882/go/api/config/pipeline_groups").then(function(result) {
			return result.data;
		});
	}
}
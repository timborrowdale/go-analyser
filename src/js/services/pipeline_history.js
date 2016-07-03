angular.module('goAnalyser')
	.factory("pipeline_history", pipelineHistory);
	
pipelineHistory.$inject = ['$http'];
	
function pipelineHistory($http) {
	
	return {
		get: get
	};
	
	function get(pipeline_name) {
		return $http.get("http://localhost:8882/go/api/pipelines/" + pipeline_name + "/history")
			.then(function(result) {
				return result.data;
			}
		);
	}
}
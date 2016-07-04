angular.module('goAnalyser')
	.factory("pipeline_history", pipelineHistory);

pipelineHistory.$inject = ['$http', 'goApi'];

function pipelineHistory($http, goApi) {

	return {
		get: get
	};

	function get(pipeline_name) {
		return $http.get(goApi.url + "pipelines/" + pipeline_name + "/history")
			.then(function(result) {
				return result.data;
			}
		);
	}
}

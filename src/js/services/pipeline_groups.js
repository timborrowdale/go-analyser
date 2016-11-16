angular.module('goAnalyser')
	.factory("pipeline_groups", pipelineGroups);

pipelineGroups.$inject = ['$http', 'goApi'];

function pipelineGroups($http, goApi) {

	return {
		get: get
	};

	function get() {
		return $http.get(goApi.url + "go/api/config/pipeline_groups").then(function(result) {
			return result.data;
		});
	}
}

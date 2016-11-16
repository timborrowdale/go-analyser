angular.module('goAnalyser')
	.factory("console_output", consoleOutput);

pipelineGroups.$inject = ['$http', 'goApi'];

function consoleOutput($http, goApi) {

	return {
		get: get
	};

	function get(pipeline, pipeline_counter, stage, stage_counter, job) {
    var uri = goApi.url + "go/files/" +
    pipeline + "/" + pipeline_counter + "/" +
    stage + "/" + stage_counter + "/" + job +
    "/cruise-output/console.log";
		return $http.get(uri).then(function(result) {
			return result.data;
		});
	}
}

angular.module('goAnalyser')
	.factory("stage_history", stageHistory);

stageHistory.$inject = ['$http', '$q', 'goApi'];

function stageHistory($http, $q, goApi) {

	return {
		get: get
	};

	function get(pipeline_name, stage_name, pipeline_counter, stage_counter) {
		return $http.get(
        goApi.url + "stages/" + pipeline_name + "/" +
        stage_name + "/instance/" + pipeline_counter + "/" + stage_counter)
			.then(function(result) {
				return result.data;
			})
			.catch(function(response) {
				return null;
			});
	}
}

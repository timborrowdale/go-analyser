angular
  .module('goAnalyser', [
  ]);
angular.module('goAnalyser')
  .controller('MainController', mainController);
  
  mainController.$inject = [ 'pipeline_groups' ]
  
  function mainController(pipelineGroups) {
    
    var vm = this;
    
    pipelineGroups.get()
      .then(function(pipeline_groups) {
        vm.pipeline_groups = pipeline_groups;
      });
      
  }


angular.module('goAnalyser')
  .controller('PipelineController', pipelineController);
  
  pipelineController.$inject = [ 'pipeline_history' ]
  
  function pipelineController(pipelineHistory) {
    
    var vm = this;
    
    pipelineHistory.get("Zuto.Uk.Application")
      .then(function(pipeline_history) {
        vm.pipeline_history = pipeline_history;
      });
      
  }


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
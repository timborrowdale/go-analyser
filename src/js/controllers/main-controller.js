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


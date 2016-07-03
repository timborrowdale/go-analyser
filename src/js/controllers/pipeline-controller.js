angular.module('goAnalyser')
  .controller('PipelineController', pipelineController);

  pipelineController.$inject = [ 'pipeline_history' ]

  function pipelineController(pipelineHistory) {

    var vm = this;

    pipelineHistory.get("Zuto.Uk.Application")
      .then(function(pipeline_history) {
        vm.pipeline_history = pipeline_history;
        console.log(vm.pipeline_history);
      });

  }

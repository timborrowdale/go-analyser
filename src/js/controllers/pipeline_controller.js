angular.module('goAnalyser')
  .controller('PipelineController', pipelineController);

  pipelineController.$inject = [ 'pipeline_history' ]

  function pipelineController(pipelineHistory) {

    var vm = this;

    vm.expanded = true;

    vm.toggle = function() {
      vm.expanded = !vm.expanded;
    }

    pipelineHistory.get(this.pipeline.name)
      .then(function(pipeline_history) {
        vm.pipeline_history = pipeline_history;
      });

  }

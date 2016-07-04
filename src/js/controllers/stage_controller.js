angular.module('goAnalyser')
  .controller('StageController', stageController);

  stageController.$inject = [ 'stage_history' ]

  function stageController(stage_history) {

        var vm = this;

        vm.expanded = true;

        vm.toggle = function() {
          vm.expanded = !vm.expanded;
        }

        stage_history.get(this.pipeline.name, this.stage.name, this.history.counter, this.stage.counter)
          .then(function(stage_history) {
            vm.stage_history = stage_history;
          });

  }

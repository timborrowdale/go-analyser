angular.module('goAnalyser')
  .controller('ExpandController', expandController);

  function expandController() {

        var vm = this;

        vm.expanded = true;

        vm.toggle = function() {
          vm.expanded = !vm.expanded;
        }

  }

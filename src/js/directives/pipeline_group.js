angular.module('goAnalyser')
  .directive('pipelineGroup', function() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'ExpandController',
      controllerAs: 'controller',
      bindToController: {
        pipelineGroup: '='
      },
      templateUrl: 'templates/pipeline_group.html'
    };
  });

angular.module('goAnalyser')
  .directive('pipelineHistory', function() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'ExpandController',
      controllerAs: 'controller',
      bindToController: {
        history: '=',
        pipeline: '='
      },
      templateUrl: 'templates/pipeline_history.html'
    };
  });

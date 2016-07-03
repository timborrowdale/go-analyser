angular.module('goAnalyser')
  .directive('pipelineHistory', function() {
    return {
      restrict: 'E',
      scope: {
        history: '='
      },
      templateUrl: 'templates/pipeline_history.html'
    };
  });

angular.module('goAnalyser')
  .directive('pipelineGroup', function() {
    return {
      restrict: 'E',
      scope: {
        pipelineGroup: '='
      },
      templateUrl: 'templates/pipeline_group.html'
    };
  });

angular.module('goAnalyser')
  .directive('pipeline', function() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'PipelineController',
      controllerAs: 'pipelineController',
      bindToController: {
        pipeline: '='
      },
      templateUrl: 'templates/pipeline.html'
    };
  });

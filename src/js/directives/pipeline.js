angular.module('goAnalyser')
  .directive('pipeline', function() {
    return {
      restrict: 'E',
      scope: {
        pipeline: '='
      },
      templateUrl: 'templates/pipeline.html'
    };
  });

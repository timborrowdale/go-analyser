angular.module('goAnalyser')
  .directive('stage', function() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'StageController',
      controllerAs: 'stageController',
      bindToController: {
        stage: '=',
        history: '=',
        pipeline: '='
      },
      templateUrl: 'templates/stage.html'
    };
  });

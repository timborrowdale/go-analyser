angular.module('goAnalyser')
  .directive('job', function() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'JobController',
      controllerAs: 'controller',
      bindToController: {
        job: '=',
        stage: '=',
        history: '=',
        pipeline: '='
      },
      templateUrl: 'templates/job.html'
    };
  });

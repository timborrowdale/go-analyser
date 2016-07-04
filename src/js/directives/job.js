angular.module('goAnalyser')
  .directive('job', function() {
    return {
      restrict: 'E',
      scope: false,
      controller: 'ExpandController',
      controllerAs: 'controller',
      bindToController: {
        job: '='
      },
      templateUrl: 'templates/job.html'
    };
  });

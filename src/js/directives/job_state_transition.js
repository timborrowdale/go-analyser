angular.module('goAnalyser')
  .directive('jobStateTransition', function() {
    return {
      restrict: 'E',
      scope: {
        jobStateTransition: '='
      },
      templateUrl: 'templates/job_state_transition.html'
    };
  });

angular.module('goAnalyser')
  .controller('MainController', mainController);

  mainController.$inject = [ 'pipeline_groups', 'goApi', '$http', '$base64' ]

  function mainController(pipelineGroups, goApi, $http, $base64) {

    var vm = this;
    vm.goApi = goApi;
    vm.updateApiDetails = updateApiDetails;

    refreshPipelineGroups();

    function refreshPipelineGroups() {
      pipelineGroups.get()
        .then(function(pipeline_groups) {
          vm.pipeline_groups = pipeline_groups;
        });
    }

    function updateApiDetails() {
      $http.defaults.headers.common.Authorization = 'Basic ' +
        $base64.encode(vm.goApi.username + ':' + vm.goApi.password);
      refreshPipelineGroups();
    }

  }

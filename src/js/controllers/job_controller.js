angular.module('goAnalyser')
  .controller('JobController', jobController);

  stageController.$inject = [ 'console_output' ]

  function jobController(console_output) {

        var vm = this;

        vm.expanded = true;

        vm.toggle = function() {
          vm.expanded = !vm.expanded;
        }

        GetLog(ParseLog);


        function GetLog(parser) {
          console_output.get(vm.pipeline.name, vm.history.counter,
          vm.stage.name, vm.stage.counter, vm.job.name).then(function(result) {
            parser(result);
          });
        }

        function ParseLog(log) {
          var logOutput = "";
          var tasks = log.split('\r\n\r\n');
          for(var i = 1; i<tasks.length; i++) {
            var taskData = GetTaskData(tasks[i]);
            logOutput = logOutput + taskData.name + " started at " +
            taskData.start + " and ended at " + taskData.end + "\r\n";
          }
          vm.jobLog = logOutput;
        }

        function GetTaskData(task) {
          var lines = task.split('\r\n');
          return {
            name: GetTaskNameFromLine(lines[0]),
            start: GetTimeForLine(lines[0]),
            end: GetTimeForLine(lines[lines.length - 1])
          };
        }

        function GetTaskNameFromLine(line) {
          var parts = line.split(' [go] ');
          if(parts[1].startsWith("Start to prepare")) {
            return "Preparing"
          }
          if(parts[1].startsWith("Start updating files")) {
            return "Updating files";
          }
          if(parts[1].startsWith("setting environment variable")) {
            return "Environment Variables";
          }
        }

        function GetTimeForLine(line) {
          var words = line.split(' ');
          return words[0];
        }

  }

angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService) {

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'SQL'];
  $scope.test = "Two-way data binding";

  $scope.announceDay = function(lesson, day) {
    alert(lesson + ' is active on ' + day + '.');
  };

});

angular.module('app', ['angularFileUpload'])

 .controller('MainCtroller', function($scope, $location, FileUploader) {
    $scope.uploader = new FileUploader();
    $scope.items = [];

    $scope.autoUpload = function(item){
      item.uploaded = true;
      console.log(item)
    }

  window.uploader = $scope.uploader;
});
'use strict';

angular.module("lineChartApp", [])
	.controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {
 	 $scope.chartData = d3.range(100).map(function(){
	    return d3.range(10).map(Math.random)
	  })
	  $scope.shared = {
	    ourData:  d3.range(10).map(Math.random)
	  }

	angular.element($window).on('resize', function(){
    	$scope.$apply();
  	})
  }]);

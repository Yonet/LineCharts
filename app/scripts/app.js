'use strict';

var lineChartApp = angular.module('lineChartApp', ['nvd3ChartDirectives']);

	function ExampleCtrl($scope){

        // $scope.xFunction = function () {
        // 	return function (d) {
        // 		return d[0];
        // 	}
        // };
        // $scope.yFunction = function () {
        // 	return function (d) {
        // 		return d[1]/100;
        // 	}
        // };

        var colorArray = ["#ffa500', '#c80032', '#0000ff', '#6464ff"];
        $scope.colorFunction = function () {
        	return function (d, i) {
        		return colorArray[i];
        	}
        }
		var data = [
		  {
			date: '2013-01-01',
			sent: 20000,
			openRate: 30,
			bounceRate: 5,
			clickRate: 15,
			optoutRate: 3
		  },
		  {
			date: '2013-01-02',
			sent: 35000,
			openRate: 23,
			bounceRate: 7,
			clickRate: 10,
			optoutRate: 1
		  },
		  {
			date: '2013-01-03',
			sent: 75773,
			openRate: 28,
			bounceRate: 4,
			clickRate: 22,
			optoutRate: 3
		  },
		  {
			date: '2013-01-04',
			sent: 13876,
			openRate: 27.4,
			bounceRate: 5.4,
			clickRate: 17.3,
			optoutRate: 3.2
		  },
		  {
			date: '2013-01-05',
			sent: 56897,
			openRate: 33.2,
			bounceRate: 3.4,
			clickRate: 14.7,
			optoutRate: 2.4
		  }
		];
		$scope.exampleData = d3.keys(data[0]).filter(function(key) { return key !== "date"}).map(function(key){
		  return {
		    key: key,
		    values: data.map(function(d){ return d[key]; })
		  };
		});
		$scope.yFunction = function(){
			return function(d){
				return d[1];
			};
		}
		$scope.xFunction = function(){
			return function(d){
				return d[0];
			};	}
}
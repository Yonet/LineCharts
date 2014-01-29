'use strict';

angular.module("lineChartApp", [])
	.directive ('lineChart',  [function(){
	  function link(scope, el){
	    var data = scope.data;
	    var color = d3.scale.category10()
	    var el = el[0]
	    var width = el.clientWidth
	    var height = el.clientHeight
	    var min = Math.min(width, height)
	    var pie = d3.layout.pie().sort(null)
	    var arc = d3.svg.arc()
	      .outerRadius(min / 2 * 0.9)
	      .innerRadius(min / 2 * 0.5)
	    var svg = d3.select(el).append('svg')
	    var g = svg.append('g')

	    // add the <path>s for each arc slice
	    var arcs = g.selectAll('path')

	    scope.$watch(function(){
	      return el.clientWidth * el.clientHeight
	    }, function(){
	      width = el.clientWidth
	      height = el.clientHeight

	      min = Math.min(width, height)

	      arc.outerRadius(min / 2 * 0.9).innerRadius(min / 2 * 0.5)

	      svg.attr({width: width, height: height})

	      g.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

	      arcs.attr('d', arc)

	    })

	    function arcTween(a) {
	      // see: http://bl.ocks.org/mbostock/1346410
	      var i = d3.interpolate(this._current, a);
	      this._current = i(0);
	      return function(t) {
	        return arc(i(t));
	      };
    	}

	    scope.$watch('data', function(data){
	      var duration = 1000
	      arcs = arcs.data(pie(data))
	      arcs.transition()
	        .duration(duration)
	        .attrTween('d', arcTween)
	      
	      arcs.enter()
	        .append('path')
	        .style('stroke', 'white')
	        .attr('fill', function(d, i){ return color(i) })
	        .each(function(d) {
	          this._current = { startAngle: 2 * Math.PI - 0.001, endAngle: 2 * Math.PI }
	        })
	        .transition()
	        .duration(duration)
	        .attrTween('d', arcTween)
	      
	      arcs.exit()
	        .transition()
	        .duration(duration)
	        .each(function(d){ 
	          d.startAngle = 2 * Math.PI - 0.001; d.endAngle = 2 * Math.PI; 
	        })
	        .attrTween('d', arcTween).remove();
	    })

	    svg.on('mousedown', function(){
	      scope.$apply(function(){
	        var num = Math.round(Math.random()* 10) + 1
	        scope.data = d3.range(num).map(Math.random)
	      })
	    })

	  }
	  return {
	    link: link,
	    restrict: 'E',
	    require: 'ngModel',
	    scope: { 'ngModel': '=' }
	  }
}])
// '$window', function ($window) {
 //    return {
	// 	// template: '/views/main.html',
	// 	restrict: 'EA',
	// 	scope: {data: '='},
	// 	link: function (scope, element, attrs, window) {
	//     // d3Service.d3().then(function(d3) {
	//     	var data = scope.data;
	// 			var svg = d3.select(ele[0])
	// 				.append('svg')
	// 				.style('width', '100%');

	// 			//Browser on resize event
	// 			// window.onresize = function () {
	// 			// 	scope.$apply();
	// 			// }
	// 			//Watch for resize event
	// 			scope.$watch(function () {
	// 				return angular.element($window)[0].innerWidth;
	// 			}, function () {
	// 				scope.render(scope.data);
	// 			});
	// 			scope.render = function (data) {
	// 				svg.selectAll('*').remove();
	// 				if (!data) return;
	// 				//TODO change temp Margin and height
	// 				var margin = 20,
	// 					width = d3.select(ele[0]).node().offsetWidth - (margin * 2),
	// 					height = 500,
	// 					//scale function for multicolor support
	// 					color = d3.scale.category20(),
	// 					x = d3.time.scale().range([0, width]),
	// 					y = yr = d3.scale.linear().range([height, 0]),
	// 					xAxis = d3.svg.axis()
	// 						.scale(x)
	// 						.orient("bottom"),
	// 					yAxis = d3.svg.axis()
	// 						.scale(y)
	// 						.orient("left"),
	// 					yrAxis = d3.svg.axis()
	// 						.scale(yr)
	// 						.orient("right"),
	// 					svg, line;
	// 				line = d3.svg.line()
	// 					.interpolate("basis")
	// 					.x(function (d) { return x(d.date);})
	// 					.y(function (d) {return y(d.sent);});
	// 				svg = d3.select("div").append("svg")
	// 				    .attr("width", width + (margin * 2))
	// 				    .attr("height", height + (margin * 2))
	// 				  .append("g")
	// 				    .attr("transform", "translate(" + margin + "," + margin + ")");

	// 					//TODO
	// 			}
	// 		// })
	// 	}}
 // }]);
    
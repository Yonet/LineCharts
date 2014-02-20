var app = angular.module('charts', ['app.services'])
    .controller('mainCtrl', function AppCtrl ($scope, chartService) {
        // function generateData() {
        //     var sin = [],
        //         sin2 = [],
        //         cos = [],
        //         cos2 = [],
        //         r1 = Math.random(),
        //         r2 = Math.random(),
        //         r3 = Math.random(),
        //         r4 = Math.random();

        //     for (var i = 0; i < 100; i++) {
        //       sin.push([ i, r1 * Math.sin( r2 +  i / (10 * (r4 + .5) ))]);
        //       cos.push([ i, r2 * Math.cos( r3 + i / (10 * (r3 + .5) ))]);
        //       sin2.push([ i, r3 * Math.sin( r1 + i / (10 * (r2 + .5) ))]);
        //       cos2.push([ i, r4 * Math.cos( r4 + i / (10 * (r1 + .5) ))]);
        //     }

        //     return [
        //       {
        //         data: sin,
        //         label: "Sine Wave"
        //       },
        //       {
        //         data: cos,
        //         label: "Cosine Wave"
        //       },
        //       {
        //         data: sin2,
        //         label: "Sine2 Wave"
        //       },
        //       {
        //         data: cos2,
        //         label: "Cosine2 Wave"
        //       }
        //     ];
        // };
        var data = {"results":[{"date":"2013-12-13","Sent":343728,"Open":141889,"Bounce":14182,"Click":40156,"Optout":1293},{"date":"2013-12-14","Sent":115733,"Open":66809,"Bounce":9164,"Click":18333,"Optout":517},{"date":"2013-12-15","Sent":257826,"Open":46421,"Bounce":8004,"Click":8867,"Optout":432},{"date":"2013-12-16","Sent":406198,"Open":70666,"Bounce":5385,"Click":12517,"Optout":910},{"date":"2013-12-17","Sent":2331831,"Open":338701,"Bounce":64618,"Click":29985,"Optout":1604},{"date":"2013-12-18","Sent":850863,"Open":240000,"Bounce":41409,"Click":21879,"Optout":1406},{"date":"2013-12-19","Sent":3130943,"Open":249580,"Bounce":151705,"Click":23040,"Optout":4697},{"date":"2013-12-20","Sent":1527338,"Open":297372,"Bounce":69972,"Click":35137,"Optout":2502},{"date":"2013-12-21","Sent":324562,"Open":124974,"Bounce":28167,"Click":13989,"Optout":1358},{"date":"2013-12-22","Sent":574419,"Open":71626,"Bounce":31872,"Click":8267,"Optout":1133},{"date":"2013-12-23","Sent":1373874,"Open":80772,"Bounce":122420,"Click":10647,"Optout":1201},{"date":"2013-12-24","Sent":404674,"Open":49880,"Bounce":21663,"Click":6558,"Optout":399},{"date":"2013-12-25","Sent":430255,"Open":42556,"Bounce":15733,"Click":6814,"Optout":804},{"date":"2013-12-26","Sent":1447730,"Open":140400,"Bounce":22587,"Click":15555,"Optout":4648},{"date":"2013-12-27","Sent":268247,"Open":86963,"Bounce":6726,"Click":9695,"Optout":1494},{"date":"2013-12-28","Sent":308579,"Open":45836,"Bounce":6722,"Click":6529,"Optout":1193},{"date":"2013-12-29","Sent":230462,"Open":39302,"Bounce":5709,"Click":5320,"Optout":1066},{"date":"2013-12-30","Sent":329221,"Open":52892,"Bounce":6985,"Click":7470,"Optout":1100},{"date":"2013-12-31","Sent":320745,"Open":36191,"Bounce":6557,"Click":6408,"Optout":978},{"date":"2014-01-01","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-02","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-03","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-04","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-05","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-06","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-07","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-08","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-09","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-10","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-11","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-12","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-13","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-14","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-15","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-16","Sent":2901909,"Open":810524,"Bounce":54943,"Click":94490,"Optout":5779},{"date":"2014-01-17","Sent":308281,"Open":856875,"Bounce":16346,"Click":108976,"Optout":4596},{"date":"2014-01-18","Sent":316965,"Open":187707,"Bounce":13100,"Click":22715,"Optout":1016},{"date":"2014-01-19","Sent":259707,"Open":156516,"Bounce":11376,"Click":19888,"Optout":950},{"date":"2014-01-20","Sent":1168083,"Open":351905,"Bounce":80677,"Click":44116,"Optout":1483},{"date":"2014-01-21","Sent":823458,"Open":294593,"Bounce":61096,"Click":32223,"Optout":1321},{"date":"2014-01-22","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-23","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-24","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-25","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-26","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-27","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-28","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-29","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-30","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-01-31","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-01","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-02","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-03","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-04","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-05","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-06","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-07","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-08","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-09","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-10","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-11","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-12","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0},{"date":"2014-02-13","Sent":0,"Open":0,"Bounce":0,"Click":0,"Optout":0}]}
        var parseDate = d3.time.format('%Y-%m-%d').parse; 
        $scope.data = data['results'].forEach(function(d) {
          d.date = parseDate(d.date);
        });

        $scope.data = d3.keys(data["results"][0]).filter(function(key) { return key !== "date"}).map(function(key){
              return {
                key: key,
                values: data["results"].map(function(d,i){ return {x: d.date, y: +d[key]}; })
              };
        });


        console.log("data", $scope.data);
    
    })
    .directive('lineChart', function (chartService, nvTooltip) {
       
      var link = function (scope, element, attr) {
        var data = scope.data;
        var selection = element[0];

        function width(margin) {
            var w = selection.parentElement.offsetWidth - 20;

        return ( (w - margin.left - margin.right - 20) < 0 ) ? margin.left + margin.right + 2 : w;
      }
      function height(margin) {
        var h = 250;

        return ( h - margin.top - margin.bottom - 20 < 0 ) ? 
                  margin.top + margin.bottom + 2 : h;
      }

        var margin = {top: 30, right: 10, bottom: 50, left: 60},
        chart = d3LineWithLegend()
                .width(width(margin))
                .height(height(margin));


        var svg = d3.select(selection)
            .datum(data)
            .append('svg');

        svg.transition().duration(500)
          .attr('width', width(margin))
          .attr('height', height(margin))
          .call(chart);


      //chart.dispatch.on('showTooltip', function(e) {
      // var offset = svg.attr('transform', 'translate('+ e.pos[0] + ',' + e.pos[1] + ')'), // { left: 0, top: 0 }
      //       // left = e.pos[0] + offset.left,
      //       // top = e.pos[1] + offset.top,
      //       formatter = d3.format(".04f");

      //   var content = '<h3>' + e.series.label + '</h3>' +
      //                 '<p>' +
      //                 '<span class="value">[' + e.point[0] + ', ' + formatter(e.point[1]) + ']</span>' +
      //                 '</p>';

      //   nvtooltip.show([left, top], content);
      // });

        // chart.dispatch.on('hideTooltip', function(e) {
        //     nvtooltip.cleanup();
        // });
        scope.$watch = ('width', function(newVal, oldVal) {
            var margin = chart.margin();

            chart
              .width(width(margin));

            d3.select(selection)
              .attr('width', width(margin))
              .call(chart);

        }, true);
        scope.$watch = ('data', function(newVal, oldVal) {
            var margin = chart.margin();


            d3.select(selection)
              .data(newVal)
              .call(chart);

        }, true);

      };

      
      return {
        restrict:'E',
        scope:{
            'data': '='
        },
        link:link
      }
})

// .factory('chartService', function(){
//         d3Legend = function() {
//             var margin = {top: 5, right: 0, bottom: 5, left: 10},
//                 width = 400,
//                 height = 20,
//                 color = d3.scale.category10().range(),
//                 dispatch = d3.dispatch('legendClick', 'legendMouseover', 'legendMouseout');


//             function chart(selection) {
//                 selection.each(function(data) {
//                   /**
//                   *    Legend curently is setup to automaticaly expand vertically based on a max width.
//                   *    Should implement legend where EITHER a maxWidth or a maxHeight is defined, then
//                   *    the other dimension will automatically expand to fit, and anything that exceeds
//                   *    that will automatically be clipped.
//                   **/

//                   var wrap = d3.select(this).selectAll('g.legend').data([data]);
//                   var gEnter = wrap.enter().append('g').attr('class', 'legend').append('g');


//                   var g = wrap.select('g')
//                       .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


//                   var series = g.selectAll('.series')
//                       .data(function(d) { return d });
//                   var seriesEnter = series.enter().append('g').attr('class', 'series')
//                       .on('click', function(d, i) {
//                         dispatch.legendClick(d, i);
//                       })
//                       .on('mouseover', function(d, i) {
//                         dispatch.legendMouseover(d, i);
//                       })
//                       .on('mouseout', function(d, i) {
//                         dispatch.legendMouseout(d, i);
//                       });
//                   seriesEnter.append('circle')
//                       .style('fill', function(d, i){ return d.color || color[i % 10] })
//                       .style('stroke', function(d, i){ return d.color || color[i % 10] })
//                       .attr('r', 5);
//                   seriesEnter.append('text')
//                       .text(function(d) { return d.label })
//                       .attr('text-anchor', 'start')
//                       .attr('dy', '.32em')
//                       .attr('dx', '8');
//                   series.classed('disabled', function(d) { return d.disabled });
//                   series.exit().remove();


//                   var ypos = 5,
//                       newxpos = 5,
//                       maxwidth = 0,
//                       xpos;
//                   series
//                       .attr('transform', function(d, i) {
//                          var length = d3.select(this).select('text').node().getComputedTextLength() + 28;
//                          xpos = newxpos;

//                          //TODO: 1) Make sure dot + text of every series fits horizontally, or clip text to fix
//                          //      2) Consider making columns in line so dots line up
//                          //         --all labels same width? or just all in the same column?
//                          //         --optional, or forced always?
//                          if (width < margin.left + margin.right + xpos + length) {
//                            newxpos = xpos = 5;
//                            ypos += 20;
//                          }

//                          newxpos += length;
//                          if (newxpos > maxwidth) maxwidth = newxpos;

//                          return 'translate(' + xpos + ',' + ypos + ')';
//                       });

//                   //position legend as far right as possible within the total width
//                   g.attr('transform', 'translate(' + (width - margin.right - maxwidth) + ',' + margin.top + ')');

//                   height = margin.top + margin.bottom + ypos + 15;
//                 });

//                 return chart;
//               }

//               chart.dispatch = dispatch;

//               chart.margin = function(_) {
//                 if (!arguments.length) return margin;
//                 margin = _;
//                 return chart;
//               };

//               chart.width = function(_) {
//                 if (!arguments.length) return width;
//                 width = _;
//                 return chart;
//               };

//               chart.height = function(_) {
//                 if (!arguments.length) return height;
//                 height = _;
//                 return chart;
//               };

//               chart.color = function(_) {
//                 if (!arguments.length) return color;
//                 color = _;
//                 return chart;
//               };

//               return chart;
//             };


//             d3Line = function () {
//                 var margin = {top: 0, right: 0, bottom: 0, left: 0},
//                   width = 960,
//                   height = 500,
//                   dotRadius = function() { return 2.5 },
//                   color = d3.scale.category10().range(),
//                   id = Math.floor(Math.random() * 10000), //Create semi-unique ID incase user doesn't select one
//                   x = d3.scale.linear(),
//                   y = d3.scale.linear(),
//                   dispatch = d3.dispatch("pointMouseover", "pointMouseout"),
//                   x0, y0;


//                 function chart(selection) {
//                 selection.each(function(data) {
//                   var seriesData = data.map(function(d) { return d.data });

//                   x0 = x0 || x;
//                   y0 = y0 || y;

//                   //TODO: reconsider points {x: #, y: #} instead of [x,y]
//                   //TODO: data accessors so above won't really matter, but need to decide for internal use

//                   //add series data to each point for future ease of use
//                   data = data.map(function(series, i) {
//                     series.data = series.data.map(function(point) {
//                       point.series = i;
//                       return point;
//                     });
//                     return series;
//                   });


//                   x   .domain(d3.extent(d3.merge(seriesData), function(d) { return d[0] } ))
//                       .range([0, width - margin.left - margin.right]);

//                   y   .domain(d3.extent(d3.merge(seriesData), function(d) { return d[1] } ))
//                       .range([height - margin.top - margin.bottom, 0]);


//                   var vertices = d3.merge(data.map(function(line, lineIndex) {
//                         return line.data.map(function(point, pointIndex) {
//                           var pointKey = line.label + '-' + point[0];
//                           return [x(point[0]), y(point[1]), lineIndex, pointIndex]; //adding series index to point because data is being flattened
//                         })
//                       })
//                   );


//                   var wrap = d3.select(this).selectAll('g.d3line').data([data]);
//                   var gEnter = wrap.enter().append('g').attr('class', 'd3line').append('g');

//                   gEnter.append('g').attr('class', 'lines');
//                   gEnter.append('g').attr('class', 'point-clips');
//                   gEnter.append('g').attr('class', 'point-paths');


//                   var g = wrap.select('g')
//                       .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



//                   var voronoiClip =  gEnter.append('g').attr('class', 'voronoi-clip')
//                     .append('clipPath')
//                       .attr('id', 'voronoi-clip-path-' + id) //this id should probably be set on update, unless ID is always set before render
//                     .append('rect');
//                   wrap.select('.voronoi-clip rect')
//                       .attr('x', -10)
//                       .attr('y', -10)
//                       .attr('width', width - margin.left - margin.right + 20)
//                       .attr('height', height - margin.top - margin.bottom + 20);
//                   wrap.select('.point-paths')
//                       .attr('clip-path', 'url(#voronoi-clip-path-' + id + ')');


//                   //var pointClips = wrap.select('.point-clips').selectAll('clipPath') // **BROWSER BUG** can't reselect camel cased elements
//                   var pointClips = wrap.select('.point-clips').selectAll('.clip-path')
//                       .data(vertices);
//                   pointClips.enter().append('clipPath').attr('class', 'clip-path')
//                     .append('circle')
//                       .attr('r', 25);
//                   pointClips.exit().remove();
//                   pointClips
//                       .attr('id', function(d, i) { return 'clip-' + id + '-' + d[2] + '-' + d[3] })
//                       .attr('transform', function(d) { return 'translate(' + d[0] + ',' + d[1] + ')' });


//                   var voronoi = d3.geom.voronoi(vertices).map(function(d,i) {
//                       return { 'data': d, 'series': vertices[i][2], 'point': vertices[i][3] }
//                   });

//                   //TODO: Add very small amount of noise to prevent duplicates
//                   var pointPaths = wrap.select('.point-paths').selectAll('path')
//                       .data(voronoi);
//                   pointPaths.enter().append('path')
//                       .attr('class', function(d,i) { return 'path-' + i; });
//                   pointPaths.exit().remove();
//                   pointPaths
//                       .attr('clip-path', function(d) { return 'url(#clip-' + id + '-' + d.series + '-' + d.point + ')'; })
//                       .attr('d', function(d) { return 'M' + d.data.join(',') + 'Z'; })
//                       .on('mouseover', function(d) {
//                         dispatch.pointMouseover({
//                           point: data[d.series].data[d.point],
//                           series: data[d.series],
//                           pos: [x(data[d.series].data[d.point][0]) + margin.left, y(data[d.series].data[d.point][1]) + margin.top],
//                           pointIndex: d.point,
//                           seriesIndex: d.series
//                         });
//                       })
//                       .on('mouseout', function(d) {
//                         dispatch.pointMouseout({
//                           point: d,
//                           series: data[d.series],
//                           pointIndex: d.point,
//                           seriesIndex: d.series
//                         });
//                       });


//                   dispatch.on('pointMouseover.point', function(d) { 
//                     wrap.select('.line-' + d.seriesIndex + ' .point-' + d.pointIndex)
//                       .classed('hover', true);
//                   });

//                   dispatch.on('pointMouseout.point', function(d) { 
//                     wrap.select('.line-' + d.seriesIndex + ' .point-' + d.pointIndex)
//                       .classed('hover', false);
//                   });



//                   var lines = wrap.select('.lines').selectAll('.line')
//                       .data(function(d) { return d }, function(d) { return d.label });
//                   lines.enter().append('g')
//                       .style('stroke-opacity', 1e-6)
//                       .style('fill-opacity', 1e-6);
//                   d3.transition(lines.exit())
//                       .style('stroke-opacity', 1e-6)
//                       .style('fill-opacity', 1e-6)
//                       .remove();
//                   lines.attr('class', function(d,i) { return 'line line-' + i })
//                       .classed('hover', function(d) { return d.hover })
//                       .style('fill', function(d,i) { return color[i % 10] })
//                       .style('stroke', function(d,i) { return color[i % 10] })
//                   d3.transition(lines)
//                       .style('stroke-opacity', 1)
//                       .style('fill-opacity', .5);


//                   var paths = lines.selectAll('path')
//                       .data(function(d, i) { return [d.data] });
//                   paths.enter().append('path')
//                       .attr('d', d3.svg.line()
//                         .x(function(d) { return x0(d[0]) })
//                         .y(function(d) { return y0(d[1]) })
//                       );
//                   paths.exit().remove();
//                   d3.transition(paths)
//                       .attr('d', d3.svg.line()
//                         .x(function(d) { return x(d[0]) })
//                         .y(function(d) { return y(d[1]) })
//                       );


//                   var points = lines.selectAll('circle.point')
//                       .data(function(d) { return d.data });
//                   points.enter().append('circle')
//                       .attr('cx', function(d) { return x0(d[0]) })
//                       .attr('cy', function(d) { return y0(d[1]) });
//                   points.exit().remove();
//                   points.attr('class', function(d,i) { return 'point point-' + i });
//                   d3.transition(points)
//                       .attr('cx', function(d) { return x(d[0]) })
//                       .attr('cy', function(d) { return y(d[1]) })
//                       .attr('r', dotRadius());

//                 });

//                 x0 = x;
//                 y0 = y;

//                 return chart;
//               }



//               chart.dispatch = dispatch;

//               chart.margin = function(_) {
//                 if (!arguments.length) return margin;
//                 margin = _;
//                 return chart;
//               };

//               chart.width = function(_) {
//                 if (!arguments.length) return width;
//                 width = _;
//                 return chart;
//               };

//               chart.height = function(_) {
//                 if (!arguments.length) return height;
//                 height = _;
//                 return chart;
//               };

//               chart.dotRadius = function(_) {
//                 if (!arguments.length) return dotRadius;
//                 dotRadius = d3.functor(_);
//                 return chart;
//               };

//               chart.color = function(_) {
//                 if (!arguments.length) return color;
//                 color = _;
//                 return chart;
//               };

//               chart.id = function(_) {
//                 if (!arguments.length) return id;
//                 id = _;
//                 return chart;
//               };


//               return chart;
//             };


//             d3LineWithLegend = function() {
//                   var margin = {top: 30, right: 10, bottom: 40, left: 60},
//                       width = 960,
//                       height = 500,
//                       dotRadius = function() { return 2.5 },
//                       xAxisLabelText = false,
//                       yAxisLabelText = false,
//                       color = d3.scale.category10().range(),
//                       dispatch = d3.dispatch('showTooltip', 'hideTooltip');

//                   var x = d3.scale.linear(),
//                       y = d3.scale.linear(),
//                       xAxis = d3.svg.axis().scale(x).orient('bottom'),
//                       yAxis = d3.svg.axis().scale(y).orient('left'),
//                       legend = d3Legend().height(30).color(color),
//                       lines = d3Line();


//                   function chart(selection) {
//                     selection.each(function(data) {
//                       var series = data.filter(function(d) { return !d.disabled })
//                             .map(function(d) { return d.data });

//                       x   .domain(d3.extent(d3.merge(series), function(d) { return d[0] } ))
//                           .range([0, width - margin.left - margin.right]);

//                       y   .domain(d3.extent(d3.merge(series), function(d) { return d[1] } ))
//                           .range([height - margin.top - margin.bottom, 0]);

//                       lines
//                         .width(width - margin.left - margin.right)
//                         .height(height - margin.top - margin.bottom)
//                         .color(data.map(function(d,i) {
//                           return d.color || color[i % 10];
//                         }).filter(function(d,i) { return !data[i].disabled }))

//                       xAxis
//                         .ticks( width / 100 )
//                         .tickSize(-(height - margin.top - margin.bottom), 0);
//                       yAxis
//                         .ticks( height / 36 )
//                         .tickSize(-(width - margin.right - margin.left), 0);


//                       var wrap = d3.select(this).selectAll('g.wrap').data([data]);
//                       var gEnter = wrap.enter().append('g').attr('class', 'wrap d3lineWithLegend').append('g');

//                       gEnter.append('g').attr('class', 'legendWrap');
//                       gEnter.append('g').attr('class', 'x axis');
//                       gEnter.append('g').attr('class', 'y axis');
//                       gEnter.append('g').attr('class', 'linesWrap');


//                       legend.dispatch.on('legendClick', function(d, i) { 
//                         d.disabled = !d.disabled;

//                         if (!data.filter(function(d) { return !d.disabled }).length) {
//                           data.forEach(function(d) {
//                             d.disabled = false;
//                           });
//                         }

//                         selection.transition().call(chart)
//                       });


//                       legend.dispatch.on('legendMouseover', function(d, i) {
//                         d.hover = true;
//                         selection.transition().call(chart)
//                       });

//                       legend.dispatch.on('legendMouseout', function(d, i) {
//                         d.hover = false;
//                         selection.transition().call(chart)
//                       });


//                       lines.dispatch.on('pointMouseover.tooltip', function(e) {
//                         dispatch.showTooltip({
//                           point: e.point,
//                           series: e.series,
//                           pos: [e.pos[0] + margin.left, e.pos[1] + margin.top],
//                           seriesIndex: e.seriesIndex,
//                           pointIndex: e.pointIndex
//                         });
//                       });

//                       lines.dispatch.on('pointMouseout.tooltip', function(e) {
//                         dispatch.hideTooltip(e);
//                       });




//                       legend
//                           .color(color)
//                           .width(width / 2 - margin.right);

//                       wrap.select('.legendWrap')
//                           .datum(data)
//                           .attr('transform', 'translate(' + (width/2 - margin.left) + ',' + (-legend.height()) +')')
//                           .call(legend);


//                       //TODO: maybe margins should be adjusted based on what components are used: axes, axis labels, legend
//                       margin.top = legend.height();  //need to re-render to see update

//                       var g = wrap.select('g')
//                           .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



//                       var linesWrap = wrap.select('.linesWrap')
//                           .datum(data.filter(function(d) { return !d.disabled }));

//                       d3.transition(linesWrap).call(lines);



//                       var xAxisLabel = g.select('.x.axis').selectAll('text.axislabel')
//                           .data([xAxisLabelText || null]);
//                       xAxisLabel.enter().append('text').attr('class', 'axislabel')
//                           .attr('text-anchor', 'middle')
//                           .attr('x', x.range()[1] / 2)
//                           .attr('y', margin.bottom - 20);
//                       xAxisLabel.exit().remove();
//                       xAxisLabel.text(function(d) { return d });

//                       g.select('.x.axis')
//                           .attr('transform', 'translate(0,' + y.range()[0] + ')')
//                           .call(xAxis)
//                         .selectAll('line.tick')
//                         .filter(function(d) { return !d })
//                           .classed('zero', true);


//                       var yAxisLabel = g.select('.y.axis').selectAll('text.axislabel')
//                           .data([yAxisLabelText || null]);
//                       yAxisLabel.enter().append('text').attr('class', 'axislabel')
//                           .attr('transform', 'rotate(-90)')
//                           .attr('text-anchor', 'middle')
//                           .attr('y', 20 - margin.left);
//                       yAxisLabel.exit().remove();
//                       yAxisLabel
//                           .attr('x', -y.range()[0] / 2)
//                           .text(function(d) { return d });

//                       g.select('.y.axis')
//                           .call(yAxis)
//                         .selectAll('line.tick')
//                         .filter(function(d) { return !d })
//                           .classed('zero', true);
//                     });

//                     return chart;
//                   }

//                   chart.dispatch = dispatch;

//                   chart.margin = function(_) {
//                     if (!arguments.length) return margin;
//                     margin = _;
//                     return chart;
//                   };

//                   chart.width = function(_) {
//                     if (!arguments.length) return width;
//                     width = _;
//                     return chart;
//                   };

//                   chart.height = function(_) {
//                     if (!arguments.length) return height;
//                     height = _;
//                     return chart;
//                   };

//                   chart.color = function(_) {
//                     if (!arguments.length) return color;
//                     color = _;
//                     return chart;
//                   };

//                   chart.dotRadius = function(_) {
//                     if (!arguments.length) return dotRadius;
//                     dotRadius = d3.functor(_);
//                     lines.dotRadius = d3.functor(_);
//                     return chart;
//                   };

//                   //TODO: consider directly exposing both axes
//                   //chart.xAxis = xAxis;

//                   //Expose the x-axis' tickFormat method.
//                   chart.xAxis = {};
//                   d3.rebind(chart.xAxis, xAxis, 'tickFormat');

//                   chart.xAxis.label = function(_) {
//                     if (!arguments.length) return xAxisLabelText;
//                     xAxisLabelText = _;
//                     return chart;
//                   }

//                   // Expose the y-axis' tickFormat method.
//                   //chart.yAxis = yAxis;

//                   chart.yAxis = {};
//                   d3.rebind(chart.yAxis, yAxis, 'tickFormat');

//                   chart.yAxis.label = function(_) {
//                     if (!arguments.length) return yAxisLabelText;
//                     yAxisLabelText = _;
//                     return chart;
//                   }

//                   return chart;
//                 }

// })

// .factory('nvTooltip', function (){


//         (function($) {

//           var nvtooltip = window.nvtooltip = {};

//           nvtooltip.show = function(pos, content, gravity, dist) {
//             var container = $('<div class="nvtooltip">');

//             gravity = gravity || 's';
//             dist = dist || 20;

//             container
//               .html(content)
//               .css({left: -1000, top: -1000, opacity: 0})
//               .appendTo('body');

//             var height = container.height() + parseInt(container.css('padding-top'))  + parseInt(container.css('padding-bottom')),
//                 width = container.width() + parseInt(container.css('padding-left'))  + parseInt(container.css('padding-right')),
//                 windowWidth = $(window).width(),
//                 windowHeight = $(window).height(),
//                 scrollTop = $('body').scrollTop(),  //TODO: also adjust horizontal scroll
//                 left, top;


//             //TODO: implement other gravities
//             switch (gravity) {
//               case 'e':
//               case 'w':
//               case 'n':
//                 left = pos[0] - (width / 2);
//                 top = pos[1] + dist;
//                 if (left < 0) left = 5;
//                 if (left + width > windowWidth) left = windowWidth - width - 5;
//                 if (scrollTop + windowHeight < top + height) top = pos[1] - height - dist;
//                 break;
//               case 's':
//                 left = pos[0] - (width / 2);
//                 top = pos[1] - height - dist;
//                 if (left < 0) left = 5;
//                 if (left + width > windowWidth) left = windowWidth - width - 5;
//                 if (scrollTop > top) top = pos[1] + dist;
//                 break;
//             }

//             container
//                 .css({
//                   left: left,
//                   top: top,
//                   opacity: 1
//                 });
//           };

//           nvtooltip.cleanup = function() {
//             var tooltips = $('.nvtooltip');

//             // remove right away, but delay the show with css
//             tooltips.css({
//                 'transition-delay': '0 !important',
//                 '-moz-transition-delay': '0 !important',
//                 '-webkit-transition-delay': '0 !important'
//             });

//             tooltips.css('opacity',0);

//             setTimeout(function() {
//               tooltips.remove()
//             }, 500);
//           };

//         })(jQuery);
// });


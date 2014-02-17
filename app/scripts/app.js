angular.module('charts', [])
    .controller('mainCtrl', function AppCtrl ($scope) {
        var data = 
            {"results":[{"date":"2013-12-02","sent":1456087,"openRate":268008,"bounceRate":144902,"clickRate":27034,"optoutRate":2943},
            {"date":"2013-12-03","sent":1696689,"openRate":335031,"bounceRate":85909,"clickRate":46675,"optoutRate":2352},{"date":"2013-12-04","sent":614963,"openRate":271374,"bounceRate":33412,"clickRate":47736,"optoutRate":1694},{"date":"2013-12-05","sent":2797662,"openRate":437251,"bounceRate":197292,"clickRate":72978,"optoutRate":5368},{"date":"2013-12-06","sent":295711,"openRate":192206,"bounceRate":37581,"clickRate":35267,"optoutRate":1963},{"date":"2013-12-07","sent":156289,"openRate":93498,"bounceRate":31906,"clickRate":19524,"optoutRate":760},{"date":"2013-12-08","sent":125784,"openRate":78494,"bounceRate":29779,"clickRate":15571,"optoutRate":672},{"date":"2013-12-09","sent":1004810,"openRate":220621,"bounceRate":70036,"clickRate":34151,"optoutRate":926},{"date":"2013-12-10","sent":1291837,"openRate":260709,"bounceRate":49022,"clickRate":42520,"optoutRate":1078},{"date":"2013-12-11","sent":425819,"openRate":236300,"bounceRate":19471,"clickRate":43154,"optoutRate":1200},{"date":"2013-12-12","sent":2389880,"openRate":233241,"bounceRate":83426,"clickRate":33411,"optoutRate":3059},{"date":"2013-12-13","sent":343728,"openRate":150790,"bounceRate":14182,"clickRate":41211,"optoutRate":1305},{"date":"2013-12-14","sent":115733,"openRate":74900,"bounceRate":9164,"clickRate":19131,"optoutRate":526},{"date":"2013-12-15","sent":257826,"openRate":54619,"bounceRate":8004,"clickRate":9638,"optoutRate":440},{"date":"2013-12-16","sent":406198,"openRate":81778,"bounceRate":5385,"clickRate":13583,"optoutRate":936},{"date":"2013-12-17","sent":2331831,"openRate":352291,"bounceRate":64618,"clickRate":31072,"optoutRate":1610},{"date":"2013-12-18","sent":850863,"openRate":252699,"bounceRate":41409,"clickRate":22876,"optoutRate":1416},{"date":"2013-12-19","sent":3130943,"openRate":261855,"bounceRate":151705,"clickRate":24014,"optoutRate":4706},{"date":"2013-12-20","sent":1527338,"openRate":308373,"bounceRate":69972,"clickRate":36019,"optoutRate":2512},{"date":"2013-12-21","sent":324562,"openRate":133802,"bounceRate":28167,"clickRate":14609,"optoutRate":1362},{"date":"2013-12-22","sent":574419,"openRate":80114,"bounceRate":31872,"clickRate":8939,"optoutRate":1139},{"date":"2013-12-23","sent":1373874,"openRate":91445,"bounceRate":122420,"clickRate":11440,"optoutRate":1207},{"date":"2013-12-24","sent":404674,"openRate":58401,"bounceRate":21663,"clickRate":7184,"optoutRate":406},{"date":"2013-12-25","sent":430255,"openRate":50747,"bounceRate":15733,"clickRate":7391,"optoutRate":806},{"date":"2013-12-26","sent":1447730,"openRate":150781,"bounceRate":22587,"clickRate":16281,"optoutRate":4662},{"date":"2013-12-27","sent":268247,"openRate":97428,"bounceRate":6726,"clickRate":10480,"optoutRate":1506},{"date":"2013-12-28","sent":308579,"openRate":54319,"bounceRate":6722,"clickRate":7215,"optoutRate":1199},{"date":"2013-12-29","sent":230462,"openRate":47747,"bounceRate":5709,"clickRate":5964,"optoutRate":1069},{"date":"2013-12-30","sent":329221,"openRate":63470,"bounceRate":6985,"clickRate":8347,"optoutRate":1112},{"date":"2013-12-31","sent":320745,"openRate":44806,"bounceRate":6557,"clickRate":7086,"optoutRate":986},{"date":"2014-01-01","sent":299932,"openRate":102273,"bounceRate":6137,"clickRate":17706,"optoutRate":1062}]}
        ;
        //parses the date to be used in xaxis

        // $scope.data = data['results'].forEach(function(d) {
        //   d.date = parseDate(d.date);
        // });
        $scope.data = d3.keys(data["results"][0]).filter(function(key) { return key !== "date"}).map(function(key){
              return {
                key: key,
                values: data["results"].map(function(d,i){ return {x: d.date, y: +d[key]}; })
              };
        });

        console.log($scope.startDate);
        //formats the data to be used by d3


        console.log("data", $scope.data);
        

    }).directive('lineChart', function(){
        return {
            restrict: 'E',
            replace: false,
            scope:{
                height: '=height',
                width:'=width',
                data: '=data',
                startDate: '=startDate',
                endDate: '=endDate',
                hovered: '&hovered'
            },
            link: function(scope, element, attrs) {
                var margin = {top: 20, right:80, bottom: 30, left: 80},
                    width = d3.select(element[0]).attr('width') - margin.left - margin.right,
                    height = scope.height - margin.top - margin.bottom;
                console.log('width ', d3.select('div#chartContainer'))
                var parseDate = d3.time.format('%Y-%m-%d').parse;
                var x = d3.time.scale()
                    .range([0, width]);
                var y = d3.scale.linear()
                    .range([height, 0]);
                var color = d3.scale.category10();
                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient('bottom');
                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient('left');
                var line = d3.svg.line()
                    .interpolate('basis')
                    .x(function(d){ return x(d.x); })
                    .y(function(d){ return y(d.y); });
                
                var data = scope.data;

                var chart = d3.select(element[0]).append('svg')
                        .attr('width', scope.width)
                        .attr('height', scope.height)
                    .append('g')
                        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
                // debugger;
                color.domain(data.map(function (d) {return d.key; }));
                data.forEach(function(kv) {
                    kv.values.forEach(function (d) {
                        d.x = parseDate(d.x);
                    })
                })
                var series = data;
                var minX = d3.min(data, function (kv) { return d3.min(kv.values, function(d) {return d.x; })});
                var maxX = d3.max(data, function (kv) { return d3.max(kv.values, function(d) {return d.x; })});
                // var minY = d3.min(data, function (kv) { return d3.min(kv.values, function(d) {return d.y; })});
                var maxY = d3.max(data, function (kv) { return d3.max(kv.values, function(d) {return d.y; })});

                x.domain([minX, maxX]);
                y.domain([0, maxY]);


                chart.append('g')
                    .attr('class', 'x axis')
                    .attr('transform', 'translate(0,' + scope.height + ')')
                    .call(xAxis);

                chart.append('g')
                    .attr('class', 'y axis')
                    .call(yAxis);

                var serie = chart.selectAll('.serie')
                    .data(data)
                    .enter().append('g')
                    .attr('class', '.serie');

                serie.append('path')
                    .attr('class', 'line')
                    .attr('d', function(d) {return line(d.values);});


                // scope.$watch('data', function (newVal, oldVal) {
                //     chartEl.datum(newVal).call(chart);
                // });
                //TODO windowresize
                // scope.$watch('width', function(){
                //     chartEl.call(chart.width(scope.width));
                // })
            }
        }
    })
    
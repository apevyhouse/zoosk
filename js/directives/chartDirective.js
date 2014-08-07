angular.module('zoosk')
.directive('chartDirective', function(){

  var createSeries = function(dogs, horses, cows) {
    return [
        {x: 1, y: dogs},
        {x: 2, y: horses},
        {x: 3, y: cows}
      ]; 
  };

  return {
    restrict: 'E',
    scope: {
      dogs: '=',
      horses: '=',
      cows: '='
    },
    link: function(scope, element, attrs, somethingElseIForget) {
      element.append('<div id="chart"></div>');
      
      var simpleSeries = createSeries(scope.dogs, scope.horses, scope.cows);
      
      scope.$watch('dogs', function(){
        simpleSeries = createSeries(scope.dogs, scope.horses, scope.cows);

        var allSerieses = [
          {
            data: simpleSeries,
            color: palette.color()
          }
        ];

        var graph = new Rickshaw.Graph({
          element: document.getElementById('chart'),
          series: allSerieses,
          width: 960,
          height: 500,
          renderer: 'bar',
        });

        graph.render();
        });

      var palette = new Rickshaw.Color.Palette({ scheme: 'spectrum2001', interpolatedStopCount: 4 });
      

      var allSerieses = [
        {
          data: simpleSeries,
          color: palette.color()
        }
      ];

      var graph = new Rickshaw.Graph({
        element: document.getElementById('chart'),
        series: allSerieses,
        width: 960,
        height: 500,
        renderer: 'bar',
      });

      graph.render();
          }
        };
});
angular.module('zoosk')
.directive('chartDirective', function(){

  var getXyPoints = function(counts) {
    return [
      {x: 1, y: counts.dogs},
      {x: 2, y: counts.horses},
      {x: 3, y: counts.cows}
    ];
  };

  var updateGraph = function(scope){
    var xyPoints = getXyPoints(scope.counts);
    scope.graph.series[0].data = xyPoints;
    scope.graph.update();
  };

  var link = function(scope, element, attrs, somethingElseIForget) {
    element.append('<div id="chart"></div>');

    var palette = new Rickshaw.Color.Palette({scheme: 'spectrum2001', interpolatedStopCount: 4});

    xyPoints = getXyPoints(scope.counts);
    scope.graph = new Rickshaw.Graph({
      element: document.getElementById('chart'),
      series: [{data: xyPoints, color: palette.color()}],
      width: 960,
      height: 500,
      renderer: 'bar',
    });
    scope.graph.render();

    scope.$watch('counts', function() {
      updateGraph(scope);
    }, true);
  };

  return {
    restrict: 'E',
    scope: {
      counts: '='
    },
    link: link
  };
});

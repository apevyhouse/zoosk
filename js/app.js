var series1 = [
  {x: 1, y: 4},
  {x: 0, y: 5},
  {x: 5, y: 6},
  {x: 4, y: 7},
  {x: 2, y: 8}
  // {1: 8},
  // {2: 7},
  // {3: 6}
];

// var seriesData = [];

// for (i = 0; i < 50; i++) {
//   seriesData.push([]);
// }

// var random = new Rickshaw.Fixtures.RandomData(150);

// for (var i = 0; i < 150; i++) {
//   random.addData(seriesData);
// }

var palette = new Rickshaw.Color.Palette( { scheme: 'spectrum2001', interpolatedStopCount: 4 } );

// var goodSeries = seriesData.map(function(s) {
//   return {
//     data: s,
//     color: palette.color()
//   }
// });

var simpleSeries = [{x: 1, y: 8}, {x: 2, y: 5}];
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

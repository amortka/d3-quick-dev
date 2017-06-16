import * as d3 from './d3';
import './app.scss';

const width = 800;
const height = 800;

function init() {
  console.clear();

  const svg = d3.select('body')
    .append('svg')
    .attrs({
      width,
      height
    });

  const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  const gBase = g.append('g')
    .classed('noTransform', true)
    .call(addAxisHelpers);

  const gSvg = g.append('g')
    .classed('svgTransform', true)
    .call(addAxisHelpers);

  gSvg
    .call(addElements)
    .call(addLegend);

  gBase
    .call(addElements)
    .call(addLegend);

  gSvg // red
    .transition()
    .delay(1500)
    .attr('transform', 'rotate(90 150 0)')
    .transition()
    .delay(1500)
    .attr('transform', 'rotate(90 150 0) rotate(90 150 -80)')
    .transition()
    .on('end', function() {
      d3.select(this)
        .append('circle')
        .attrs({
          cx: 150,
          cy: 150,
          r: 10
        });
    });

  function addLegend(selection) {
    const g = selection.append('g').classed('legend', true);

    const triangle = d3.symbol()
      .type(d3.symbolTriangle)
      .size(50);

    g.append('line')
      .attrs({
        x1: 25,
        y1: 15,
        x2: 55,
        y2: 15
      });

    g.append('line')
      .attrs({
        x1: 15,
        y1: 25,
        x2: 15,
        y2: 55
      });


    g.append('path')
      .classed('arrow', true)
      .attrs({
        d: triangle,
        transform: ' translate(55, 15) rotate(90)'
      });

    g.append('text')
      .attrs({
        x: 70,
        y: 20
      })
      .text('x');

    g.append('path')
      .classed('arrow', true)
      .attrs({
        d: triangle,
        transform: ' translate(15, 55) rotate(60)'
      });


    g.append('text')
      .attrs({
        x: 11,
        y: 80
      })
      .text('y');
  }
  function addElements(selection) {
    selection.append('rect')
      .attrs({
        x: 0,
        y: -80,
        width: 150,
        height: 80
      });

    selection.append('circle')
      .attrs({
        cx: 50,
        cy: 50,
        r: 10
      });
  }
  function addAxisHelpers(selection) {
    selection.append('line')
      .attrs({
        x1: -width / 2,
        x2: width / 2,
        y1: 0,
        y2: 0
      });

    selection.append('line')
      .attrs({
        x1: 0,
        x2: 0,
        y1: -height / 2,
        y2: height / 2
      });
  }
}

init();

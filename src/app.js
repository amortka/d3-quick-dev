import * as d3 from './d3';
import './app.scss';

let svg;

function init() {
  console.clear();

  svg = d3.select('body').append('svg');

  svg.append('text')
    .attrs({
      'x': 150,
      'y': 75
    })
    .text('hello world');
}

init();

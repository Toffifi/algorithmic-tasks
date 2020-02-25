
exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  } else if (!arguments || ! arguments.length) {
    return 0;
  } else {
    return array.sort((a, b) => a - b)[0];
  }
  
}

exports.max = function max (array) {
  if (!array || !array.length) {
    return 0;
  } else if (!arguments || ! arguments.length) {
    return 0;
  } else {
    return array.sort((a, b) => b - a)[0];
  }
  
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  } else if (!arguments || ! arguments.length) {
    return 0;
  } else {
    return array.reduce((a, b) => (a + b)) / array.length
  }
}

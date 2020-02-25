module.exports = function countCats(matrix) {
  let cats = 0;
  for (let i in matrix) {
    for (let j in matrix[i]) {
      if(matrix[i][j] === '^^') {
        cats += 1;
      }
    }
  }
  return cats;
}
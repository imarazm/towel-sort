
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || !matrix.length) {
    return [];
  } else {
    let arrSorted = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        arrSorted.push(matrix[i])
      } else {
        arrSorted.push(matrix[i].reverse())
      }
    }
    return towelSort = arrSorted.flat()
  }
}

// You should implement your task here.

module.exports = function towelSort (matrix) {
  let outputArray = [];

  if (!matrix || matrix === 0){
      return outputArray;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0 ) {
        outputArray = outputArray.concat(matrix[i]);
    } else {
        outputArray = outputArray.concat(matrix[i].reverse());
    }
  }

  return outputArray;
}

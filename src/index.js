module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return [];
  } else if (matrix.length === 0) {
    return [];
  } else {
    matrix.map((item,index) => index%2 ? item.reverse() : item);
  }
  let res = [];
  for (i=0;i<matrix.length;i++) {
    res = res.concat(matrix[i]);
  }
  return res;
}
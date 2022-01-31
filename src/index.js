
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((accum, item, index) => {
    if(index % 2 === 0) {
       return accum.concat(item);
    } else {
      return accum.concat(item.reverse());
    }
  }, []);
}

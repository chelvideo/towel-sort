
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (matrix == undefined) return [];
  matrix.forEach((item, index) => {
    if ((index+2)%2 != 0) res = res.concat(item.reverse());
    else res = res.concat(item);
    //console.log (item,' ',index,' ',res);
  });

  return res;
}

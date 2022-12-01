const values = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(function (item) {
    return a <= item && item <= b;
  });
}
console.log(filterRange(values, 1, 4));

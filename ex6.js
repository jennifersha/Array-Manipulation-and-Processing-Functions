//1
Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}
//2
let sum = 0;
var array = [];
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
//3
function removeDuplicates(array) {
    const result = [];
    const map = {};
  
    for (let i = 0; i < array.length; i++) {
      if (map[array[i]]) {
        continue;
      } else {
        result.push(array[i]);
        map[array[i]] = true;
      }
    }
    return result;
  }
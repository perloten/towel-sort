
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix == []) return []
      let m = matrix.length,  matrixSort = []; 
      for (let i = 0; i < m; i++)
       { 
      matrixSort[ i ] = [];
      let n = matrix[i].length;
      if(i%2 === 0){
        for (let j = 0; j < n; j++) {
          matrixSort[ i ][ j ] = matrix[ i ][ j ];
        }
      } else {
        for (let j = 0; j < n; j++) {
          matrixSort[ i ][ j ] = matrix[ i ][ n-1 - j ];
        }
      }  
    }
    let res = matrixSort.reduce((result,element) => result.concat(element), []);
    return res;
  };


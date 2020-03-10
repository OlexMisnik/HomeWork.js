var moveZeros = function (arr) {
   let nonzero = arr.filter(elem => elem !== 0    
      );
  return nonzero.concat(arr.filter(elem => elem === 0));
}




console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
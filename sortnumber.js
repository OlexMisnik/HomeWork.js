function sortArray(array) {
  let newarray = array.filter ( elem => elem % 2 );
  newarray = newarray.sort((a,b) => a - b);
  return array.map((x) => x % 2 ? newarray.shift() : x);
}



console.log(sortArray([5, 3, 2, 8, 1, 4]))  // == [1, 3, 2, 8, 5, 4]
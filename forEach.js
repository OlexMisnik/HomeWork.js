var numArray = [1, 2, 5, 7, 8, 10];
var numEndArray = [];
numArray.forEach(function(element) {
  var endelement = (element + 1);
  numEndArray.push(endelement);
});
console.log(numArray);
console.log(numEndArray)
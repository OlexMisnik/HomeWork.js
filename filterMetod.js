var number = [1, 2, 5, 7, 8, 10];
var evennumber = number.filter(function(num){
    return num % 2 == 0;
})
console.log(number);
console.log(evennumber);
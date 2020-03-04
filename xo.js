function XO(str) {
    const arr = str.toUpperCase().split("");

    const arrX = arr.filter(function (x) {
        return x === "X";
    });
    //   console.log(arrX);
    const arrO = arr.filter(function (o) {
        return o === "O";
    });

    return arrX.length === arrO.length;


}



console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
function count(string) {
    let obj = {};
    let arr = string.split("");
    arr.map(function (x) {
        obj[x] = obj[x] + 1 || 1;
    }
    );
    return obj;

}




console.log(count("aba"));
console.log(count(""));   
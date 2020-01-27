function callXXX(a) {

    switch (typeof a) {
        case "string":
            return "it is a string";
            break;
        case "number":
            return "it is a number";
            // console.log("it is a number");
            break;
        default:
            return "it is an empty arg";
            // console.log("it is an empty arg");
            break;            
    }
};

console.log(callXXX('ghjjk')) // it is a string
console.log(callXXX(8)) // it is a number
console.log(callXXX()) // it is an empty arg
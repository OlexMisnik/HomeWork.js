function perimeter(n) { 
    let arr = [1, 1]; 
    for (let i = 2; i <= n; i++) { arr[i] = arr[i - 1] + arr[i - 2]; } 
    console.log(arr);
    return 4 * arr.reduce((a, b) => { return a + b }); 
}

console.log(perimeter(7))

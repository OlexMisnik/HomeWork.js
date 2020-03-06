function tickets(peopleInLine) {
    let bill25 = 0;
    let bill50 = 0;
    let bill100 = 0;
    for (let i = 0; i < peopleInLine.length; i++) {

        if (peopleInLine[i] === 25) {
            bill25 = bill25 + 1;
        }

        else if (peopleInLine[i] === 50) {
            if (bill25 !== 0) {
                bill25 = bill25 - 1;
                bill50 = bill50 + 1;
            }
            else return "NO";
        }

        else if (peopleInLine[i] === 100) {
            if (bill25 !== 0 && bill50 !== 0) {
                bill25 = bill25 - 1;
                bill50 = bill50 - 1;
                bill100 = bill100 + 1;
            }
            else if (bill25 > 2) {
                bill25 = bill25 - 3;
                bill100 = bill100 + 1;
            }
            else return "NO";
        }
    }
    return "YES";
}


console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));

function constructFamily(name, familyname, score) {
    this.name = name;
    this.familyname = familyname;
    this.score = score;
    this.fullName = function () {
        return {
            name: (this.name + "  " + this.familyname) ,
            score: this.score
        }
    }
}
let persone1 = new constructFamily("Serg", "Ivanov", 10);
;


console.log(persone1.fullName()); 
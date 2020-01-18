const arr1 = [{
    name: 'film1',
    rate: 8
},
{
    name: 'film2',
    rate: 9
},
{
    name: 'film3',
    rate: 3
},
{
    name: 'film4',
    rate: 2
},
{
    name: 'film5',
    rate: 5
},
{
    name: 'film6',
    rate: 3
}
];
const arr2 = [];
function foo() {
    let film = arr1[0]; let index = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (film.rate < arr1[i].rate) { // проверить что этого элемента arr1[i] нет в массиве arr2
            film = arr1[i]
            index = i
        }     
    }
    arr2.push(film);
};
arr1.forEach(foo);

console.log(arr2)
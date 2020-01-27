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
]
const arr2 = [];

// -------------------------------
const tries = arr1.length

for (let y = 0; y < tries; y++) {
    let film = arr1[0];
    let index = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (film.rate > arr1[i].rate) {
            film = arr1[i]
            index = i
        }     
    }
    arr2.push(film)
    arr1.splice(index,1);
}

// -------------------------------
console.log(arr1)
console.log(arr2)

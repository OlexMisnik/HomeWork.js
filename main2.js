const arr1 = [{
    name: 'film1',
    rate: 8
},
{
    name: 'film2',
    rate: 10
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
    let film = arr1[0];  

    for (let i = 0; i < arr1.length; i++) { 
        if (film.rate < arr1[i].rate)  {
            film = arr1[i];
            // for (let y = 0; y < arr2.length; y++) {
            if (arr2.includes(film) == false) {
                arr2.push(film)}
            // }
            }            
        }           
    }



    arr1.forEach(foo);

    console.log(arr2);
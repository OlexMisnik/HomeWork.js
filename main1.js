
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

const arr2 = [...arr1];

arr2.sort(function(a, b) {
if (a.rate >= b.rate) {
    return 1;
}
if (a.rate < b.rate) {
    return -1;
}
});
//console.log(arr1);
console.log(arr2)  //как вставить элементы массива?
// Варіант з використанням for
// const value = 10;
// if (typeof value !== 'number'){
//     console.log ('Таке чуство шо Бог десь наказує нас за шось');
// } else {
//     for (let i = 2;  i < value; i += 2){
//         console.log(i);
//     }
// }


// Варіант з використанням while
const value = 10;
if (typeof value !== 'number'){
    console.log ('Таке чуство шо Бог десь наказує нас за шось');
} else {
    let i = 2;
    while (i < value) {
        i += 2;
        console.log(i);
    }
}
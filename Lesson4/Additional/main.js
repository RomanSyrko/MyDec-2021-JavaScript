// --- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function fConcatenation(...x) {
//         if (arguments.length > 1){
//             return arguments[0] + arguments[1] ;
//         }
//         else{
//             return arguments[0];
//         }
// }
// let result = fConcatenation(`A`,`B`)
// console.log(result);


// --- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


// --- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let arr = [
    {name: 'Dima', age: 13, car: 'Camry'},
    {name: 'Vova', age: 22, car: 'Daewoo'},
    {name: 'Ivan', age: 33, car: 'Peugeot'},
    {name: 'Oleg', age: 44, car: 'BMW'},
];
console.log(arr);
console.log(arr[1].age);
console.log(arr['name'])

// function fKeys(xxx) {
//     for (let item of xxx) {
//         console.log(item)
//     }
// }
//
// fKeys(arr)


// --- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// --- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function fConcatenation(a, b) {
    if (arguments.length > 1) {
        return arguments[0] + arguments[1];
    } else {
        return arguments[0];
    }
}

let result1 = fConcatenation(`A`, `B`)
console.log(result1);


// --- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function fSumArray(array1, array2) {
    let sumArray = [];
    for (let i = 0; i < array1.length; i++) {
        sumArray.push(array1[i] + array2[i]);
    }
    return sumArray;
}

let result2 = fSumArray([1, 2, 3, 4], [2, 3, 4, 5])
console.log(result2)



// --- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
function fKeys(obj) {
    let newArrayKeys = [];
    for (let i = 0; i < obj.length; i++) {
        newArrayKeys.push(Object.keys(obj))
    }
    return newArrayKeys;
}

let result3 = fKeys([
    {name: 'Dima', age: 13, car: 'Camry'},
    {name: 'Vova', age: 22, car: 'Daewoo'},
    {name: 'Ivan', age: 33, car: 'Peugeot'},
    {name: 'Oleg', age: 44, car: 'BMW'},
    {name: 'Roma', age: 19, car: 'Audi'}
])
console.log(Object.keys(result3));


// --- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
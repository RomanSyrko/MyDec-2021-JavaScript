// Всі функції повинні бути описані стрілочним типом!!!!

let oneArrayForAll = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// --- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const mathMin = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}
mathMin(11, 22, 33)


// --- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const mathMax =(a, b, c) => {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else {
        console.log(c)
    }
}
mathMax(11, 22, 33)


// --- створити функцію яка повертає найбільше число з масиву
const returnMaxNumber = () => Math.max(...oneArrayForAll);
let arrMax = returnMaxNumber()
console.log(arrMax)

// --- створити функцію яка повертає найменьше число з масиву
const returnMinNumber = () => Math.min(...oneArrayForAll);
let arrMin = returnMinNumber()
console.log(arrMin)


// --- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const arrSum = (oneForAll) => {
    let result = 0;
    for (const check of oneForAll) {
        result = result + check;
    }
    return result;
}
let sum1 = arrSum(oneArrayForAll);
console.log(sum1)

// --- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const arrAverage = (oneForAll) => {
    let result = 0;
    for (const check of oneForAll) {
        result = result + check;
    }
    return result / oneForAll.length;
}
let sum2 = arrAverage(oneArrayForAll)
console.log(sum2)


// --- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const anyNumb = (...arg) => {
    let numbMin = arg[0];
    let numbMax = arg[0];
    for (const element of arg) {
        if (element > numbMax) {
            numbMax = element;
        }
        if (element < numbMin) {
            numbMin = element;
        }
    }
    console.log(numbMax);
    return numbMin;
}
console.log(anyNumb(1, 2, 3, 4, 5, 6, 7, 8, 9))


// --- створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
const fRandom = (xxx) => {
    let arrRandom = [];
    for (let i = 0; i < xxx; i++) {
        arrRandom.push(Math.round(Math.random() * 100))
    }
    return arrRandom;
}
console.log(fRandom(22))


// --- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
const fRandom1 = (xxx, limit) => {
    let arrRandom = [];
    for (let i = 0; i < xxx; i++) {
        arrRandom.push(Math.round(Math.random() * limit))
    }
    return arrRandom;
}
console.log(fRandom1(22, 100))


// --- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const fR = (oneForAll) => oneForAll.reverse();
console.log(fR(oneArrayForAll))
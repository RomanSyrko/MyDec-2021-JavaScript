// --- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
const x1 = (str) => str.replaceAll(`..`, ` `).replaceAll(`---`, ` `).replaceAll(`__`, ` `)
console.log(x1(n1));
console.log(x1(n2));
console.log(x1(n3));


// --- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const x2 = (array, int) => {
    let newArray = []
    for (let i = 0; i < array; i++) {
        newArray.push(Math.floor(Math.random() * int))
    }
    return newArray;
}
let result = x2(5, 100)
console.log(result);

// --- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(result.sort((a, b) => a - b));


// --- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(result.filter(even => even % 2 === 0));


// --- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(result.map(x => x.toString()));


// --- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
const sortNums = (x, direction) => {
    if (direction === `ascending`) return x.sort((a, b) => a - b);
    if (direction === `descending`) return x.sort((a, b) => b - a);
}
let nums = (sortNums([11, 21, 3], `ascending`));
let nums2 = (sortNums([11, 21, 3], `descending`));
console.log(nums);
console.log(nums2);


// --- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  --- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));


//  --- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.reduce((a, b) => {
    if (b.monthDuration > 5) {
        a.moreThan5.push(b);
    }
    return a;
}, {moreThan5: []}));
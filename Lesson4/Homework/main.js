// --- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    return a * b;
}

console.log(rectangle(10, 12))


// --- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return Math.PI * r ** 2;
}

console.log(circle(4))


// --- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
    return 2 * Math.PI * r * (h + r);
}

console.log(cylinder(4, 2))


// --- створити функцію яка приймає масив та виводить кожен його елемент
let myArray = [1, 2, 3, 4, 5, `a`, `b`, `c`, true];

function fArr(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
    }
}

fArr(myArray);


// --- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(a) {
    document.write(`<p>${a}</p>`);
}

text(`Hello`)


// --- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function toDo(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

toDo(`Hi`)


// --- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function toDoFor(txt, num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}

toDoFor(`Bye`, 4)

// --- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function fArr2(myArray) {
    document.write(`<ul>`);
    for (let i = 0; i < myArray.length; i++) {
        document.write(`<li>${myArray[i]}</li>`);
    }
    document.write(`</ul>`);
}

fArr2(myArray);


// --- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let myArrObject = [{id: 0, name: `Petya`, age: 34}, {id: 1, name: `Roman`, age: 23}, {
    id: 2,
    name: `Ivan`,
    age: 27
}, {id: 3, name: `Yulia`, age: 18}];

function fInfo(myAO) {
    for (let myAOElement of myAO) {
        document.write(`<div>ID: ${myAOElement.id} -- Name: ${myAOElement.name} -- Age: ${myAOElement.age}</div>`);
    }
}

fInfo(myArrObject);
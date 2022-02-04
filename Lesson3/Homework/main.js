// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arrN = [1, 2, 3, 4, 5]
// let arrS = [`a`, `b`, `c`, `d`, `e`]
// let arrM = [55, 66, `AA`, `AAA`, true, false]
// console.log(`${arrN}`, `${arrS}`, `${arrM}`)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr1 = []
// arr1[0] = `Hello`
// arr1[2] = false
// arr1[3] = 123
// console.log(arr1)


// --- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// document.write(`<ul>`)
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>item</div>`)
// }
// document.write(`</ul>`)
//
// --- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// document.write(`<ul>`)
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>item ${i}</div>`)
// }
// document.write(`</ul>`)
//
// --- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// document.write(`<ul>`)
// i = 0;
// while (i <= 20) {
//     document.write(`<h1>WOW</h1>`)
//     i++;
// }
// document.write(`</ul>`)
//
// --- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// document.write(`<ul>`)
// i = 0;
// while (i <= 20) {
//     document.write(`<h1>WOW ${i}</h1>`)
//     i++;
// }
// document.write(`</ul>`)


// --- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (i = 0; i < arr2.length; i++) {
//     console.log(`${arr2[i]}`)
// }
//
// --- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr3 = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`]
// for (i = 0; i < arr3.length; i++) {
//     console.log(`${arr3[i]}`)
// }
//
// --- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr4 = [`hello`, `ivan`, `john`, 5, 6, 7, 8, 9, true, false]
// for (i = 0; i < arr4.length; i++) {
//     console.log(`${arr4[i]}`)
// }
//
// --- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr5 = [`hello`, `ivan`, `john`, 5, 6, 7, 8, 9, true, false]
// for (i = 0; i <= arr5.length; i++) {
//     if (typeof arr5[i] === "boolean") {
//         console.log(arr5[i])
//     }
// }
//
// --- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr6 = [`hello`, `ivan`, `john`, 5, 6, 7, 8, 9, true, false]
// for (i = 0; i <= arr6.length; i++) {
//     if (typeof arr6[i] === "number") {
//         console.log(arr6[i])
//     }
// }
//
// --- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr7 = [`hello`, `ivan`, `john`, 5, 6, 7, 8, 9, true, false]
// for (i = 0; i <= arr7.length; i++) {
//     if (typeof arr7[i] === "string") {
//         console.log(arr7[i])
//     }
// }


// --- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr8 = []
// arr8[0] = `hello`
// arr8[1] = `ivan`
// arr8[2] = `john`
// arr8[3] = 1
// arr8[4] = 2
// arr8[5] = 3
// arr8[6] = 4
// arr8[7] = 5
// arr8[8] = true
// arr8[9] = false
// for (i = 0; i < arr8.length; i++){
//     console.log(arr8[i])
// }
//
// --- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i)
// }
//
// --- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(i)
// }
//
// --- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }
//
// --- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//     }
// }
//
// --- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(i);
//     }
// }
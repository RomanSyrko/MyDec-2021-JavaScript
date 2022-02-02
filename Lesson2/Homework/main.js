// -- - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt(`Please enter a value from 0 to 59`)
// if (time >= 0 && time <= 14)
//     console.log(`This is the First quarter of an hour`)
// else if (time >= 15 && time <= 29)
//     console.log(`This is the Second quarter of an hour`)
// else if (time >= 30 && time <= 44)
//     console.log(`This is the Three quarter of an hour`)
// else if (time >= 45 && time <= 59)
//     console.log(`This is the Fourth quarter of an hour`)
// else
//     alert(`The entered value is incorrect. Please try again`)


// --  - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = prompt(`Please enter a value from 1 to 31`)
// if (day >= 1 && day <= 10)
//     console.log(`This is the First decade of the month`)
// if (day >= 11 && day <= 20)
//     console.log(`This is the Second decade of the month`)
// if (day >= 21 && day <= 31)
//     console.log(`This is the Third decade of the month`)
// else
//     alert(`The entered value is incorrect. Please try again`)


// -- - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// -- Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = 123;
// if (test === true)
//     console.log(`TRUE`)
// else
//     console.log(`FALSE`)


// -- - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = 0; // Або через prompt()
// if (a !== 0)
//     console.log(`TRUE`);
// else
//     console.log(`FALSE`);


// -- - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// const week = prompt(`Please enter number of the day of the week`)
// switch (week) {
//     case `1`:
//     case `3`:
//     case `5`:
//         console.log(`You have a lecture today`)
//         break;
//     case `2`:
//     case `4`:
//         console.log(`You have a practice today`)
//         break;
//     case `6`:
//         console.log(`You have English today`)
//         break;
//     case `7`:
//         console.log(`Finaly! It's a Holiday!`)
//         break;
//     default:
//         console.log(`Please try again`)
// }


// -- - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = prompt(`Будь ласка введіть рік`)
// if (year % 4 === 0 && year % 100 !== 0)
//     console.log(`Високосний`)
// else if (year % 400 === 0)
//     console.log(`Високосний`)
// else
//     console.log(`Не Високосний`)


// -- - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// -- Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let info = prompt(`What the original name of the JavaScript?`)
// if (info === `ECMAScript`)
//     console.log(`TRUE!`)
// else
//     console.log(`You don't know? ECMAScript!`)
// -- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.
// let x = prompt(`Please enter 1st number:`);
// let y = prompt(`Please enter 2nd number:`);
// if (x > y)
//     console.log(x, `is bigger than`, y)
// else if (x === y)
//     console.log(`You enter the same numbers`)
// else
//     console.log(y, `is bigger than`, x)
//
//
// -- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90. Користувач вводить номер квартири просто в змінні або через prompt('').
// -- Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let house = prompt(`Please enter the room number. From 1 to 90:`);
// if (house >= 1 && house <= 20)
//     console.log(`The room in 1st entrance`)
// else if (house >= 21 && house <= 48)
//     console.log(`The room in 2nd entrance`)
// else if (house >= 49 && house <= 90)
//     console.log(`The room in 3th entrance`)
// else
//     console.log(`Please try again`)
//
//
// -- Ми маємо змінну number в яку користувач задає числове значення, якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = prompt(`Please enter any number:`);
// if (number === `10`)
//     console.log(`Correct!`)
// else
//     console.log(`Is not correct( Please try again`)
//
//
// -- Ми маємо змінну x в яку користувач задає значення, якщо в змінну записане число, вивести 1,
// -- якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// -- якщо в змінну записали щось інше, спрацьовує else
// let x = {};
// if (typeof x === "number")
//     console.log(typeof x, `- 1`)
// else if (typeof x === "string")
//     console.log(typeof x, `- 2`)
// else if (typeof x === "boolean")
//     console.log(typeof x, `- 3`)
// else if (typeof x === "object")
//     console.log(typeof x, `- 3`)
// else
//     console.log(`It's something else`)
//
//
// -- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// -- Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// -- Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// console.log(`Hey! This game is called: "Are we going to study at OKTEN today?"`)
// let dg = prompt(`Please enter a temperature of degrees Celsius`)
// if (dg >= 10 && dg <= 22)
//     console.log(dg, `°C! We are going to study!`);
// else
//     console.log(`We stay at home and study online!`)
//
//
// -- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// -- числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let poleChudes = +prompt(`Please choose number from 1 to 5:`)
// switch (poleChudes){
//     case 1:
//         console.log(`You won Auto!`)
//         break
//     case 2:
//         console.log(`You won Smartphone!`)
//         break
//     case 3:
//         console.log(`You won Bike!`)
//         break
//     case 4:
//         console.log(`You won Pencil!`)
//         break
//     case 5:
//         console.log(`You won Cake!`)
//         break
//     default:
//         console.log(`You loose!`)
// }
// -- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// -- кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
// -- Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3)
//     console.log(`This is a large array. 3 or more elements.`)
// else
//     console.log(`This is a small array with less than 3 elements.`)


// --  Маємо 3 числа і між ним нам потрібно знайти те що посередині.
//  -- Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let a = 5
let b = 20
let c = 10
if ((a < b && b < c) || (c < b && b < a))
    console.log(b)
else if ((b < a && a < c) || (c < a && a < b))
    console.log(a)
else
    console.log(c)


// -- Перепишіть конструкцію if з використанням умовного оператора '?':
// -- let result;
// -- if (a + b < 4) {
// --   result = 'Мало';
// -- } else {
// --    result = 'Багато';
// -- }
// a + b < 4 ? 'Мало' : 'Багато'


// --  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем напишіть це тернарним оператором
// let x = 0
// x < 0 ? console.log(`Number`, x, `is Negative`) : x === 0 ? console.log(`The number is 0`) : console.log(`Number`, x, `is Positive`)
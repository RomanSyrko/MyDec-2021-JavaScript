// -- 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// -- Скласти результат цих чисел в змінній result.
let mas1 = [2, 3, 4, 5, 6, 7, 8, 9, 9, 4]
let result = mas1[0] + mas1[1] + mas1[2] + mas1[3] + mas1[4] + mas1[5] + mas1[6] + mas1[7] + mas1[8] + mas1[9]
console.log(result);

// -- 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    name: `Harry Potter and the Philosopher's Stone`,
    pages: 309,
    genre: `Fantasy`
}

// -- 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: `Harry Potter and the Chamber of Secrets`,
    pages: 251,
    genre: `Fantasy`,
    authors: {
        author: `Joanne Rowling`,
        illustrator: `Cliff Wright`
    }
}

// -- 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
//  -- Вивести кожну книгу як окремий об'єкт
let books = [{
    name: `Harry Potter and the Philosopher's Stone`,
    pages: 309,
    genre: `Fantasy`
}, {
    name: `Harry Potter and the Chamber of Secrets`,
    pages: 251,
    genre: `Fantasy`,
    authors: {
        author: `Joanne Rowling`,
        illustrator: `Cliff Wright`
    }
}]
console.log(books[0]);
console.log(books[1]);

// -- 5. Напишіть код, який вираховує площу прямокутника висотою 23см.
//  -- (змінна height) та шириною 10см (змінна width). Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

// -- 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//  -- результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.PI*Math.pow(dC/2,2)*heightC;
console.log(Math.floor(v));

// -- 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//   -- Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow
//   -- (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(m**2 + n**2);
console.log(k);


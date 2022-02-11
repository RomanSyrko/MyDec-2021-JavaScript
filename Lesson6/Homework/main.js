// --- - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let hw = 'hello world'
let li = 'lorem ipsum'
let jsic = 'javascript is cool'
console.log(hw.length);
console.log(li.length);
console.log(jsic.length);

// --- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(hw.toLowerCase());
console.log(li.toLowerCase());
console.log(jsic.toLowerCase());

// --- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(hw.toUpperCase());
console.log(li.toUpperCase());
console.log(jsic.toUpperCase());

// --- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());


// --- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
const stringToarray = (str) => str.split(' ');
let arr = stringToarray('Каждый охотник желает знать');
console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
const delete_characters = (str, length) => str.substr(0, length);
let str1 = 'Каждый охотник желает знать';
console.log(delete_characters(str1, 7))


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
const insert_dash = (str) => str.replaceAll(` `, `-`).toUpperCase();
let str3 = "HTML JavaScript PHP";
console.log(insert_dash(str3));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const firstCapitalize = (str) => str[0].toUpperCase() + str.slice(1)
let str4 = `javascript is cool`;
console.log(firstCapitalize(str4));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitalize = (str) => str.split(' ').map(words => words.charAt(0).toUpperCase() + words.slice(1)).join(' ')
let str5 = `javascript is cool`;
console.log(capitalize(str5));

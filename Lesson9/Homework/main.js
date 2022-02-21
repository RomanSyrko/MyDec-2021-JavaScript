// --- Все робити за допомоги js.
// - створити блок,
let h1 = document.createElement(`h1`);
// - додати цей блок в body.
document.body.appendChild(h1);
h1.innerText = `Hello`
// - додати йому класи wrap, collapse, alpha, beta
h1.classList.add(`wrap`, `collapse`, `alpha`, `beta`);
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
h1.style.color = `green`
h1.style.background = `orange`
h1.style.fontSize = `50px`
h1.style.display = `flex`
h1.style.justifyContent = `center`
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(h1.cloneNode(true));


// - Є масив:
let array = ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menu = document.getElementsByClassName(`menu`)[0];
for (let item of array) {
    let li = document.createElement(`li`);
    li.innerText = item;
    menu.append(li);
}
menu.style.background = `silver`
menu.style.width = `100px`


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let courses of coursesAndDurationArray) {
    let div = document.createElement(`div`);
    div.innerText = `${courses.title} - ${courses.monthDuration}`
    document.body.append(div)
}


// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (let courses2 of coursesAndDurationArray) {
    let div = document.createElement(`div`);
    div.classList.add(`item`)
    let h2 = document.createElement(`h2`);
    h2.classList.add('heading')
    h2.innerText = courses2.title
    let p = document.createElement(`p`);
    p.classList.add(`description`)
    p.innerText = courses2.monthDuration
    div.append(h2)
    div.append(p)
    document.body.append(div)
}
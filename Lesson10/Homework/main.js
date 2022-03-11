// --- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let idText = document.getElementById(`text`);
console.log(idText);
idText.onclick = function () {
    idText.removeAttribute(`id`)
    console.log(idText);
}


// --- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hideButton = document.getElementsByTagName(`button`)[0];
console.log(hideButton);
hideButton.onclick = function () {
    hideButton.remove()
}


// --- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('btn').onclick = function () {
    let age = document.getElementById('age').value;
    if (age >= 18) {
        console.log(`Congrats`);
    } else if (age < 18) {
        console.log(`You have less 18`);
    }
}


// --- Создайте меню, которое раскрывается/сворачивается при клике
function dropdownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem5', body: 'lorem ipsum dolo sit ameti'},
];

let mainDIV = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    h3.innerText = item.title;
    p.innerHTML = item.body;
    btn.innerHTML = 'Hide'

    btn.onclick = () => {
        p.classList.add('hidden');
    }
    div.append(h3, p, btn);
    mainDIV.append(div);

    mainDIV.style.display = `flex`
    div.style.margin = `5px`
    div.style.border = `1px solid black`
}
document.body.appendChild(mainDIV)


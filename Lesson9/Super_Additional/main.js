let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// --- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let array = []
for (let userAddress of users) {
    array.push(`${userAddress.address.city} ${userAddress.address.country} ${userAddress.address.street} ${userAddress.address.houseNumber}`);
    // array.push(userAddress.address);
}
console.log(array);
// --- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (let user of users) {
    let usersDIV = document.createElement(`div`);
    usersDIV.append(user.name, user.age, user.status, user.address.city, user.address.country, user.address.street, user.address.houseNumber)
    document.body.append(usersDIV)
}
// --- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (let user of users) {
    let usersDIV = document.createElement(`div`);
    let name = document.createElement(`div`);
    let age = document.createElement(`div`);
    let status = document.createElement(`div`);
    let address = document.createElement(`div`);

    address.append(user.address.city, user.address.country, user.address.street, user.address.houseNumber)
    usersDIV.append(name, age, status, address)
    document.body.append(usersDIV)
}
// --- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let user of users) {
    let usersDIV = document.createElement(`div`);

    let name = document.createElement(`div`);
    name.innerText = user.name
    let age = document.createElement(`div`);
    age.innerText = user.age
    let status = document.createElement(`div`);
    status.innerText = user.status

    let address = document.createElement(`div`);
    let city = document.createElement(`div`);
    city.innerText = user.address.city
    let country = document.createElement(`div`);
    country.innerText = user.address.country
    let street = document.createElement(`div`);
    street.innerText = user.address.street
    let houseNumber = document.createElement(`div`);
    houseNumber.innerText = user.address.houseNumber


    address.append(city, country, street, houseNumber)
    usersDIV.append(name, age, status, address)
    document.body.append(usersDIV)
}


// --- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let ulElements = document.createElement(`ul`);
document.body.appendChild(ulElements)
let hTwo = document.getElementsByTagName(`h2`);

for (let item of hTwo) {
    let liElements = document.createElement(`li`);
    liElements.innerText = item.innerText

    ulElements.appendChild(liElements)
}


// --- Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let wrap = document.createElement(`div`);
wrap.setAttribute(`id`, `wrap`);
document.body.append(wrap);

for (let rule in rules) {
    let mainDIV = document.createElement(`div`);
    mainDIV.classList.add(`rules`)
    let title = document.createElement(`h2`);
    title.innerText = rules[rule].title
    let body = document.createElement(`p`);
    body.innerText = rules[rule].body

    mainDIV.append(title, body);
    wrap.append(mainDIV);
}
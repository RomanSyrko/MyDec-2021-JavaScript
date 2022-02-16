// --- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// - створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1, `Vicente`, `Bryan`, `vicente.bryan@gmail.com`, +380322712108)
let user2 = new User(2, `Wayne`, `Solis`, `wayne.solis@gmail.com`, +380322654865)
let user3 = new User(3, `Damion`, `Rios`, `damion.rios@gmail.com`, +380322865498)
let user4 = new User(4, `Aubrie`, `Ferrell`, `aubrie.ferrell@gmail.com`, +380322456840)
let user5 = new User(5, `Cale`, `Roach`, `cale.roach@gmail.com`, +380322347337)
let user6 = new User(6, `Tyler`, `Griffith`, `tyler.griffith@gmail.com`, +380322987080)
let user7 = new User(7, `Roy`, `Marsh`, `roy.marsh@gmail.com`, +380322402394)
let user8 = new User(8, `Jaiden`, `Mcgrath`, `jaiden.mcgrath@gmail.com`, +380322132415)
let user9 = new User(9, `Cedric`, `Chandler`, `cedric.chandler@gmail.com`, +380322756486)
let user10 = new User(10, `Timothy`, `Kim`, `timothy.kim@gmail.com`, +380322654785)
// let arrayUsers = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
let arrayUsers = [user10, user5, user8, user4, user2, user7, user6, user3, user9, user1]
console.log(arrayUsers);



// --- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const x = arrayUsers.filter((even) => {
    if (even.id % 2 === 0){
        return even;
    }});
console.log(x);


// --- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arrayUsers.sort((x, y) => x.id - y.id));



// --- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client(1, `Vicente`, `Bryan`, `vicente.bryan@gmail.com`, +380322712108, [`LG`, `Samsung`, `Nokia`, `HTC`, `iPhone`])
let client2 = new Client(2, `Wayne`, `Solis`, `wayne.solis@gmail.com`, +380322654865, [`iPhone`])
let client3 = new Client(3, `Damion`, `Rios`, `damion.rios@gmail.com`, +380322865498, [`LG`, `Samsung`, `Nokia`, `iPhone`])
let client4 = new Client(4, `Aubrie`, `Ferrell`, `aubrie.ferrell@gmail.com`, +380322456840, [`LG`, `Samsung`, `iPhone`])
let client5 = new Client(5, `Cale`, `Roach`, `cale.roach@gmail.com`, +380322347337, [`LG`, `Samsung`,])
let client6 = new Client(6, `Tyler`, `Griffith`, `tyler.griffith@gmail.com`, +380322987080, [`LG`, `HTC`, `iPhone`])
let client7 = new Client(7, `Roy`, `Marsh`, `roy.marsh@gmail.com`, +380322402394, [`LG`, `Samsung`, `Nokia`, `HTC`, `iPhone`])
let client8 = new Client(8, `Jaiden`, `Mcgrath`, `jaiden.mcgrath@gmail.com`, +380322132415, [`Nokia`,`iPhone`])
let client9 = new Client(9, `Cedric`, `Chandler`, `cedric.chandler@gmail.com`, +380322756486, [`Samsung`,`iPhone`])
let client10 = new Client(10, `Timothy`, `Kim`, `timothy.kim@gmail.com`, +380322654785, [`HTC`])
let allClients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
console.log(allClients);

// --- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(allClients.sort((a, b) => a.order.length - b.order.length));
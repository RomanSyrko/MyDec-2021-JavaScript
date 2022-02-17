// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, maker, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`Model - ${this.model}, Maker - ${this.maker}, Year - ${this.year}, Max Speed - ${this.maxSpeed}, Engine Capacity - ${this.engineCapacity}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
        // console.log(maxSpeed);
    }
    this.changeYear = function (newValue) {
        this.year = newValue
        // console.log(newValue);
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let newCar = new Car(`SF90`, `Ferrari`, 2019, 340, 1.6);
console.log(newCar);
newCar.drive()
newCar.info()
newCar.increaseMaxSpeed(50)
newCar.drive()
newCar.changeYear(2222)
console.log(newCar);
newCar.addDriver(`Michael Schumacher`)
console.log(newCar);


// --- (Те саме, тільки через клас)
// --- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class myCar {
    constructor(model, maker, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `їдемо зі швидкістю` + ` ` + this.maxSpeed + ` ` + `на годину`
    }

    info() {
        return `Model - ` + this.model + ` ` + `Maker - ` + this.maker + ` ` + `Year - ` + this.year + ` ` + `Max Speed - ` + this.maxSpeed + ` ` + `Engine Capacity - ` + this.engineCapacity
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed
    }

    changeYear(newValue) {
        return this.year = newValue
    }

    addDriver(driver) {
        return this.driver = driver
    }
}

let newCar2 = new myCar(`X5`, `BMW`, 2020, 250, 4.5);
console.log(newCar2)
console.log(newCar2.drive());
console.log(newCar2.info());
newCar2.increaseMaxSpeed(40);
console.log(newCar2.drive());
newCar2.changeYear(2222);
console.log(newCar2)
newCar2.addDriver(`Petro`)
console.log(newCar2)


// --- створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, year, footSize) {
    this.name = name;
    this.year = year;
    this.footSize = footSize;
}

const allCinderella = [
    new Cinderella('Allisson', 16, 32),
    new Cinderella('Janessa', 18, 35),
    new Cinderella('Adeline', 19, 37),
    new Cinderella('Abagail', 17, 38),
    new Cinderella('Bella', 20, 36),
    new Cinderella('Rebecca', 28, 43),
    new Cinderella('Joanna', 23, 40),
    new Cinderella('Emmy', 21, 39),
    new Cinderella('Alexis', 25, 36),
    new Cinderella('Ariana', 24, 42),
];
console.log(allCinderella);

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let foundPrince = new Prince(`Henry`, 32, 37);
console.log(foundPrince);

function finallyFound(allCinderella, foundPrince) {
    for (const allCinderellaElement of allCinderella) {
        if (allCinderellaElement.footSize === foundPrince.foundShoe)
            return allCinderella.find((item) => item.footSize === foundPrince.foundShoe)
    }
}

console.log(finallyFound(allCinderella, foundPrince));
// --- 1. Створити пустий масив
let arr = [];
for (let i = 0; i < 20; i++) {
    arr[i] = i + 1;
        console.log(i)
}


// ---  a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; i < 50; i++) {
//     arr[i] = i + 1;
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// --- b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    arr[i] = i + 1;
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// --- c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * 100);
    console.log(arr[i])
}

// --- d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
        console.log(randomInteger(8,732))
}

// --- 2. Вивести за допомогою console.log кожен третій елемент
for (let i = 0; i < arr.length; i+=3) {
        document.write(`<li>${arr[i]}</li>`)
}

// --- 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr.length; i+=3) {
    if (arr[i] % 2 === 0 ){
        document.write(`<li>${arr[i]}</li>`)
    }
}
// --- Дано натуральное число n. Выведите все числа от 1 до n.
const num = (n, limit) => {
    n++;
    console.log(n)
    if (n > limit - 1) {
        return;
    }
    num(n, limit);
}

num(0, 5);

// --- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const num2 = (a, b) => {
    if (a < b) {
        num2(a, b - 1);
        console.log(b);
    } else if (a > b) {
        num2(a - 1, b);
        console.log(b);
    }
}
num2(2, 9)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arrF = [9, 8, 0, 4];
// const x = (obj) => {
// }
// console.log(arrF);



// --- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
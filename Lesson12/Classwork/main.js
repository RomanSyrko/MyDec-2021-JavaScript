// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let header = document.createElement('header');
header.classList.add('Comments')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        let mainDiv = document.createElement('div');
        for (const buttonElement of value) {
            let divCard = document.createElement('div');
            divCard.innerHTML = `
            <h2>ID: ${buttonElement.id}</h2>
            <h3>User ID: ${buttonElement.userId}</h3>
            <p>Title: ${buttonElement.title}</p>`

            let button = document.createElement('button');
            button.innerText = 'View Body'
            button.onclick = function (e) {
                e.preventDefault()
                header.innerHTML = `<p>Body: ${buttonElement.body}</p>`
            }

            divCard.style.border = '2px solid black'
            divCard.style.margin = '10px'
            divCard.style.width = '400px'
            mainDiv.style.paddingTop = '120px'

            divCard.appendChild(button)
            mainDiv.appendChild(divCard)
            document.body.appendChild(mainDiv)
        }
    });

header.style.border = '2px solid red'
header.style.width = '600px'
header.style.margin = '10px'
header.style.minHeight = '100px'
header.style.position = 'fixed'
header.style.background = 'silver'

document.body.appendChild(header)
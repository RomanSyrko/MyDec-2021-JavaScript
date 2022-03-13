// --- Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        console.log(value);

        for (const posts of value) {
            let mainDiv = document.createElement('div');

            let id = document.createElement('div');
            id.innerHTML = `<h2>ID - ${posts.id}</h2>`

            let userId = document.createElement('div');
            userId.innerHTML = `<h3>User ID - ${posts.userId}</h3>`


            let body = document.createElement('div');
            body.innerHTML = `<p>Body - ${posts.body}</p>`

            let title = document.createElement('div');
            title.innerHTML = `<h4>Title - ${posts.title}</h4>`


            mainDiv.append(id, userId, body, title)
            document.body.appendChild(mainDiv)

            mainDiv.style.border = `2px solid black`
            mainDiv.style.margin = `10px`


        }
    });


// --- Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (const comments of value) {
            let mainDiv = document.createElement('div');

            let id = document.createElement('div');
            id.innerHTML = `<h2>ID - ${comments.id}</h2>`

            let postId = document.createElement('div');
            postId.innerHTML = `<h3>Post ID - ${comments.postId}</h3>`

            let name = document.createElement('div');
            name.innerHTML = `<h4>Name - ${comments.name}</h4>`

            let body = document.createElement('div');
            body.innerHTML = `<p>Body - ${comments.body}</p>`

            let email = document.createElement('div');
            email.innerHTML = `<h5>@email - ${comments.email}</h5>`

            mainDiv.append(id, postId, name, body, email)
            document.body.appendChild(mainDiv)

            mainDiv.style.border = '2px solid black'
            mainDiv.style.margin = '10px'
        }
    });
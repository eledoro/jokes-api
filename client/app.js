let generateJoke = document.getElementById('general-joke-button');
let jokeContainer = document.getElementById('general-joke-container');
let jokeUrl = "http://localhost:3000/jokes";

generateJoke.addEventListener('click', () => {
    fetch(jokeUrl, {
        method: 'GET',
    })
       .then(response => response.json())
       .then(data = (data) => {
            console.log(data);
            console.log(data[0].text);
            let num = Math.round(Math.random() * 9) + 1
            // console.log(num);
            let element =  `
            <p>${data[num].text}</p>
            `;
            jokeContainer.insertAdjacentHTML("afterend", element);
        })
})
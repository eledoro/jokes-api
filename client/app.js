let generateJoke = document.getElementById('general-joke-button');
let jokeContainer = document.getElementById('general-joke-container');
let jokeUrl = "http://localhost:3000/jokes";

// Generate Random Joke 

generateJoke.addEventListener('click', () => {
    fetch(jokeUrl, {
        method: 'GET',
    })
       .then(response => response.json())
       .then(data = (data) => {
            console.log(data);
            console.log(data[0].id.text);
            let num = Math.round(Math.random() * 9) + 1
            // console.log(num);
            let element =  `
            <p>${data[num].id.text}</p>
            `;
            jokeContainer.insertAdjacentHTML("beforeend", element);
        })
})


// Click to Receive Joke with your Rating input 

let ratedJoke = document.getElementById('rated-joke');
let ratedContainer = document.getElementById('rated-joke-container');

ratedJoke.addEventListener('click', () => {
    // e.preventDefault();

    let inputRating = document.getElementById("rating-input");
    let rating = inputRating.value;
    let ratedUrl = `http://localhost:3000/jokes/${rating}`

    console.log(ratedContainer);
    console.log(inputRating);
    console.log(rating);
    if(rating !== ''){
        fetch(ratedUrl, {
            method: 'GET',
        })
           .then(response => response.json())
           .then(data = (data) => {
                console.log(data);
    
                // console.log(num);
                let ratedJokeElement =  `
                <p>${data.id.text}</p>
                `;
                ratedContainer.insertAdjacentHTML("beforeend", ratedJokeElement);
            })
    }

})


// Clear Jokes container
let clearButton = document.getElementById('clear-jokes');
clearButton.addEventListener('click', () => {
    ratedContainer.textContent = '';
    jokeContainer.textContent = '';
})


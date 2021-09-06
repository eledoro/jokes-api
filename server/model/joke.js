const jokesData = require('../data');

class Joke {
    constructor(id, text, rating) {
        this.id = id;
        this.text = text;
        this.rating = rating;
    }

    // We call this method when the route is a the root of the page '/'
    static get all(){
        const jokes = jokesData.map((joke) => new Joke(joke));
        return jokes;
    }

    // We call this method to select a joke by rating
    static findByRating(rating){
        try{
            const jokeData = jokesData.filter((joke) => joke.rating === rating)[0];
            const joke = new Joke(jokeData);
            return joke;
        } catch(err){
            throw new Error('No jokes of that rating!')
        }
    }

    // Create a joke
}

module.exports = Joke;


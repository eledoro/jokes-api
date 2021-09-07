const express = require('express');
const router = express.Router();

const Joke = require('../model/joke');

// Retrieving all jokes in JSON format 

router.get('/', (req, res) => {

    const jokesData = Joke.all;
    res.send(jokesData);
})

// Retrieving a joke by Rating

router.get('/:rating', (req, res) => {
    try {
       console.log(req.params.rating);
       const jokeRating = parseInt(req.params.rating);
       const selectedJoke = Joke.findByRating(jokeRating);
       res.send(selectedJoke); 

    } catch (error) {
        console.log(err);
        res.status(404).send(err);
    }
})

module.exports = router;
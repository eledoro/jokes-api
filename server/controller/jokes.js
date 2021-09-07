const express = require('express');
const router = express.Router();

const Joke = require('../model/joke');

router.get('/', (req, res) => {
    const jokesData = Joke.all;
    res.send(jokesData);
})

module.exports = router;
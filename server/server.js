const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let obj =  {id: 7, name: 'joke 7', rating: 4}

//Importing Data from data.js setup with module.exports 
const data = require('./data.js');

//Here say at the /jokes route - use our joke Router - this sends the request to the jokes.js inside the controller 
// const jokeRoutes = require('./controller/jokes');
// app.use('/jokes', jokeRoutes);

//Root case
app.get('/', (req, res) => {
    res.send('Welcome to the root of the jokes server');
})

app.get('/jokes', (req, res) => {
    res.send(data);
})

// POST REQUESTS 
app.post('/jokes', (req, res) => {
    data.push(obj);
    res.json(data);
})

// DELETE REQUEST
app.delete('/jokes', (req, res) => {
    data.pop();
    res.json(data);
})

app.listen(port, () => {
    console.log(`Joke API server listening at http://localhost:${port}`);
})

module.exports = app;
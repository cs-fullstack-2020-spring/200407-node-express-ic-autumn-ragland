//20-04-07 Node and Express IC

// import the express module using require
let express = require('express');
// create server
let app = express();

// EX 1
// route for root path ('localhost:8000')
app.get('/', (req, res) => {
    res.send("Welcome to my node + express server");
});

// EX 2
// simple route for path 'localhost:8000/whatILearned'
app.get('/whatILearned', (req, res) => {
    res.send("I learned now to make routes!");
});

// EX 3
// simple route for path 'localhost:8000/questionsIHave'
app.get('/questionsIHave', (req, res) => {
    res.send("How do react and node interact?")
})

// EX 4
// route for path 'localhost:8000/seeMyNumber/[NUMBER]`
app.get('/seeMyNumber/:number', (req, res)=> {
    // display number user entered in the path
    res.send(`You chose the number ${req.params.number}`);
})

// allow server to listen on port 8000
app.listen(8000, () => {
    // Listening Message
    console.log("Listening on port 8000")
})
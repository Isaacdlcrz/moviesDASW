const express = require('express')
const mongoose = require('mongoose')

// Initializing express
const app = express()

const routes = require('./routes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
})
app.use('', routes);

app.get('', (req, res) => {
    res.send('Hello there! I am running');
})

// Database connection
const mongoURI= 'mongodb+srv://isaacitesgoggle:123@maincluster.fprrhj9.mongodb.net/TIESODB?retryWrites=true&w=majority';
mongoose.connect(mongoURI).then(() => {
    app.listen(6969, () => {
        console.log("Connected to database!");
    })
}).catch(err => {
    console.log("Could not connect to database", err);
})
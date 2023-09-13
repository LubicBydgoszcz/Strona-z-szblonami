const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("Strona działa!")
    res.render('index', {
        pageTitle: 'Strona główna'
    });
});

app.get('/omnie', (req, res) => {
    //res.send("Strona o mnie")
    res.render('about', {
        pageTitle: 'Strona o mnie'
    });
});

app.get('/kontakt', (req, res) => {
    //res.send("Strona kontakt")
    res.render('contact', {
        pageTitle: 'Strona kontakt'
    });
});

app.get('/hobby', (req, res) => {
    //res.send("Strona hobby")
    res.render('hobby', {
        pageTitle: 'Strona hobby'
    });
});

app.get('/kluby', (req, res) => {
    //res.send("Strona kluby")
    res.render('clubs', {
        pageTitle: 'Strona kluby'
    });
});

app.listen(5000,() => {
    console.log("Serwer działa!")
});
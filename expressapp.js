const express = require('express');

//express app
const expressapp = express();

//register view engine
expressapp.set('view engine', 'ejs');

//listen for request
expressapp.listen(3000);

expressapp.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.render('index');
});

expressapp.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about');
});

expressapp.get('/blogs/create', (req, res) => {
    res.render('create');
});

//redirects
expressapp.get('/about-us', (req, res) => {
    res.redirect('/about');
});

expressapp.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404');
});
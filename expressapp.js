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
    const blogs = [
        {title: 'First Blog Entry', snippet: 'Blah1 de Blah de Blah!'},
        {title: 'Second Blog Entry', snippet: 'Blah2 de Blah de Blah!'},
        {title: 'Third Blog Entry', snippet: 'Blah3 de Blah de Blah!'},
        {title: 'Third Blog Entry', snippet: 'Blah4 de Blah de Blah!'},
    ];
    res.render('index', { title : 'Home', blogs });
});

expressapp.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title : 'About' });
});

expressapp.get('/blogs/create', (req, res) => {
    res.render('create', { title : 'Create' });
});

expressapp.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title : '404' });
});

//redirects
expressapp.get('/about-us', (req, res) => {
    res.redirect('/about');
});


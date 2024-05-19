const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const Blog = require('./models/blog');



//express app
const expressapp = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://nodejsbloguser:Password123@cluster0.hwjjpkt.mongodb.net/nodejstut?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
.then((result) => expressapp.listen(3000))
.catch((err) => console.log(err));

//register view engine
expressapp.set('view engine', 'ejs');

// //listen for request
// expressapp.listen(3000);

// Middleware & static files
expressapp.use(express.static('public'));

expressapp.use(morgan('dev'));

//mongoose and mongo sandbox routes
// expressapp.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'my new blog 2 snippet',
//         body: 'my new blog 2 body blah blah blah'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// expressapp.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// expressapp.get('/single-blog', (req, res) => {
//     Blog.findById('664a21b3dfe321a7facd62ee')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// expressapp.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// expressapp.use((req, res, next) => {
//     console.log('in the next middleware ');
//     next();
// });

expressapp.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    // const blogs = [
    //     {title: 'First Blog Entry', snippet: 'Blah1 de Blah de Blah!'},
    //     {title: 'Second Blog Entry', snippet: 'Blah2 de Blah de Blah!'},
    //     {title: 'Third Blog Entry', snippet: 'Blah3 de Blah de Blah!'},
    //     {title: 'Third Blog Entry', snippet: 'Blah4 de Blah de Blah!'},
    // ];
    // res.render('index', { title : 'Home', blogs });
    res.redirect('/blogs');
});

expressapp.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title : 'About' });
});


// blog routes

expressapp.get('/blogs', (req, res) => {
    Blog.find().sort( {createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        });
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


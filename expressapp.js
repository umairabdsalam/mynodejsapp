const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
//const Blog = require('./models/blog');



//express app
const expressapp = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://nodejsbloguser:Password123@cluster0.hwjjpkt.mongodb.net/nodejstut?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
.then((result) => expressapp.listen(3000))
.catch((err) => console.log(err));

//register view engine
expressapp.set('view engine', 'ejs');


// Middleware & static files
expressapp.use(express.static('public'));

expressapp.use(morgan('dev'));

expressapp.get('/', (req, res) => {
    res.redirect('/blogs');
});

expressapp.get('/about', (req, res) => {
    res.render('about', { title : 'About' });
});


// blog routes

// expressapp.get('/blogs', (req, res) => {
//     Blog.find().sort( {createdAt: -1 })
//         .then((result) => {
//             res.render('index', { title: 'All Blogs', blogs: result })
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });



expressapp.use((req, res) => {
    res.status(404).render('404', { title : '404' });
});

//redirects
expressapp.get('/about-us', (req, res) => {
    res.redirect('/about');
});
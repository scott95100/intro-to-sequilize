// 1 - environment
require('dotenv').config();

// 2 - imports
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const db = require('./models');
const user = require('./models/user');

// 3 - App set up
const app = express();
app.set('view engine', 'ejs');

// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


// 5 - Routes (controllers)
app.get('/', (req, res) => {
    res.send('Welcome to my App'); // Yo, Rome: what is this doing?
});



app.get('/coders', (req, res)=> {
    //we need to get all users from database
    db.user.findAll()
    .then((users)=> {
        res.render('index', { users: users })
    })
    //we need to get 
})

app.get('/coders/new', (req, res)=> {
    console.log('This is the new route')
    res.render('new')
})

//////POST ROUTES////////
app.post('/coders', (req, res)=> {
    const userInput = req.body;
    //make sure data types are correct before adding to db
    let updateAge = Number(userInput.age);
    let firstName = userInput.firstName;
    let lastName = userInput.lastName;
    let email = userInput.email;
    //insert into database
    db.user.create({
        firstName,
        lastName,
        email,
        age: updateAge
    })
    .then(newCoder => {
        console.log(newCoder.get());
        res.redirect('/coders')
    })
    
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
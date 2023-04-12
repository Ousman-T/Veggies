require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;
const Veggie = require('./models/Veggie');


// ============ Configurations
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


/**
 * Middlewares
 */

app.use((req, res, next) => {
    console.log('I run on all routes!');
    next();
});
// parses data coming from request
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});


/**
 * Index Route (returns all veggies)
 */

app.get('/veggies/', (req, res) => {
    // res.send('<h1>Veggies</h1>');
    Veggie.find({}, (error, allVeggies) => {
        res.render('Index', {veggies: allVeggies});
    });
});

/**
 * New Route
 */
app.get('/veggies/new', (req, res) => {
    res.render('New');
});


/**
 * Post Method (accepts data as form)
 */

app.post('/veggies', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    console.log(req.body);
    Veggie.create(req.body, (error, foundVeggie) => {
        res.render('Show', {veggie: foundVeggie});
    });
});

/**
 * Show Route: 
 */

app.get('/veggies/:id', (req, res) => {
    console.log(req.params.id);
    Veggie.findById(req.params.id, (error, foundVeggie) => {
        res.render('Show', {veggie: foundVeggie});
    });
});

app.get('*', (req, res) => {
    res.render('404')
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    mongoose.set('strictQuery', true)
    // connecting to mongoose
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!');
    });
});
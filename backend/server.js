require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose');

//express app
const app = express();

// middleware 
app.use(express.json()) // To send a json file when we are adding or updating a workout

app.use( (req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routs (Get all the routes writen in workouts.js file and use it here in the app) after firing a request to /api/workouts 
app.use('/api/workouts', workoutRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        // listen for requests 
        app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port ', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })




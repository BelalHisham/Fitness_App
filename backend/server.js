require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')

//express app
const app = express();

app.use(cors(
    {
        origin: ["https:// deploy"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// middleware 
app.use(express.json()) // To send a json file when we are adding or updating a workout

app.use( (req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routs (Get all the routes writen in workouts.js file and use it here in the app) after firing a request to /api/workouts 
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

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




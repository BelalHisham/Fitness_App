const express = require('express');
const {
    getWorkouts,
    getWorkout,
    creatWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireauth') // Idk why it needs auth and not Auth



const router =  express.Router();

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts 
router.get('/', getWorkouts)


// GET a single workout
router.get('/:id',getWorkout)

// POST a new workout 
router.post('/', creatWorkout )

// DELETE a workout 
router.delete('/:id', deleteWorkout )

// UPDATE a workout 
router.patch('/:id', updateWorkout )

module.exports = router;
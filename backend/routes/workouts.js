const express = require('express');
const {
    getWorkouts,
    getWorkout,
    creatWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router =  express.Router();


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
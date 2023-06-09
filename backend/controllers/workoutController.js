const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');



// Get all workouts

const getWorkouts = async (req, res) => {

    const user_id = req.user._id


    const workouts = await Workout.find({user_id}).sort({createdAt: -1})

    res.status(200).json(workouts)
}


// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'}) // used return because we do not want it to carry out and stop if there are no workouts (workout is null)
    }

    res.status(200).json(workout)
    
}


// Create new workout

const creatWorkout = async (req, res) => {
     // destructure
     const {title, load, reps} = req.body

     let emptyFields = []

     if(!title){
        emptyFields.push('title')
     }
     if(!load){
        emptyFields.push('load')
     }
     if(!reps){
        emptyFields.push('reps')
     }
     if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
     }
    
     // add doc to db
     try{
        const user_id = req.user._id
         const workout = await Workout.create({title, load, reps, user_id})
         res.status(200).json(workout)
     } catch(error){
         // 400 error code
         res.status(400).json({error: error.message})
     }
 
}


// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(400).json({error: 'No such workout'}) // used return because we do not want it to carry out and stop if there are no workouts (workout is null)
    }

    res.status(200).json(workout)



}


// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body // spread the object to a new object after update
    })

    if(!workout){
        return res.status(400).json({error: 'No such workout'}) // used return because we do not want it to carry out and stop if there are no workouts (workout is null)
    }

    res.status(200).json(workout)


}


module.exports = {
    getWorkouts,
    getWorkout,
    creatWorkout,
    deleteWorkout,
    updateWorkout
}
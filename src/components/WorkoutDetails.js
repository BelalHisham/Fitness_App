import React from 'react'
import {Box} from '@mui/material';


const WorkoutDetails = ({workout}) => {
  return (

    <Box className="workout-details">
      <h4> {workout.title} </h4>

      <p> <strong >Load (kg):</strong>  {workout.load} </p>
      <p> <strong> Reps: </strong>  {workout.reps} </p>
      <p> {workout.createdAt} </p>
    </Box>
    
  )
}

export default WorkoutDetails
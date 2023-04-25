import React from 'react'
import {Box} from '@mui/material';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';




const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/'+ workout._id, {
      method: 'DELETE'
    })

    const json = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (

    <Box className="workout-details">
      <h4> {workout.title} </h4>

      <p> <strong >Load (kg):</strong>  {workout.load} </p>
      <p> <strong> Reps: </strong>  {workout.reps} </p>
      <p> {workout.createdAt} </p>
      <span style={{color: 'red', backgroundColor: 'transparent'}} onClick={handleClick}> <DeleteForeverRoundedIcon /> </span>
    </Box>
    
  )
}

export default WorkoutDetails
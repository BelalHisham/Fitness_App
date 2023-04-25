import React from 'react'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react' 
import WorkoutDetails from '../components/WorkoutDetails'


const AddWorkout = () => {
    const [workouts, setworkouts] = useState(null)
    useEffect( () => {

        const fetchWorkouts = async () => {
            /* we have added the end point in the package.json in proxy
            this is only for the delopment for production we need to make sure
            every request points to the correct end point */
            const response = await fetch('/api/workouts'); 
            const json = await response.json();

            if(response.ok){
                setworkouts(json)
            }

        }

        fetchWorkouts();

    }, []) // when the array is empty it will only run once
  return (
    <Box sx={{
        height: '100vh'
    }} >
    {workouts && workouts.map( (workout) => (
        <Typography key={workout._id}> {workout.title} </Typography>

    ))}  
    </Box>
  )
}

export default AddWorkout
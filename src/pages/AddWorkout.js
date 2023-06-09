import React from 'react'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react' 
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext' 
import {useAuthContext} from '../hooks/useAuthContext'


const AddWorkout = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()
   
    useEffect( () => {

        const fetchWorkouts = async () => {
            /* we have added the end point in the package.json in proxy
            this is only for the delopment for production we need to make sure
            every request points to the correct end point */
            const response = await fetch('/api/workouts', {
              headers: {
                'Authorization': `Bearer ${user.token}`
              }
            }); 
            const json = await response.json();

            if(response.ok){
               
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }

        }
        // for auth
        if(user){
          fetchWorkouts();
        }
      

    }, [dispatch, user]) // when the array is empty it will only run once
  return (
    <Box className = 'home' >
    <Box className = 'workouts'>
    {workouts && workouts.map( (workout) => (
       <WorkoutDetails key={workout._id} workout = {workout} />

    ))}
    </Box>
    <WorkoutForm />
    </Box>
  )
}

export default AddWorkout
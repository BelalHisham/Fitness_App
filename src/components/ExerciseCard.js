import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Pagination, Stack, Typography } from '@mui/material';


const ExerciseCard = ({exercise}) => {
    console.log(exercise.name)
  return (
    
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>

    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

    <Stack direction= "row">

    <Button sx={{ ml: "20px", color: '#FFF', background: '#FFa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
        {exercise.bodyPart}
    </Button>


    <Button sx={{ ml: "20px", color: '#FFF', background: '#FFcc57', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
        {exercise.target}
    </Button>

    </Stack>

    <Typography  ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
    </Typography>

 

    </Link>
  )
}

export default ExerciseCard
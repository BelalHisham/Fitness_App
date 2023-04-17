import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  // adding this here because it will affect the whole application not the search only
  const [bodyPart, setBodyPart] = useState(['all']);
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart)
  return (
    <Box>

    <HeroBanner />
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart}  setBodyPart = {setBodyPart} />
    <Exercises  exercises = {exercises}  setExercises={setExercises} bodyPart={bodyPart}  />

    </Box>
  )
}

export default Home
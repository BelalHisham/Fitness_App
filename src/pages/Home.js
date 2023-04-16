import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  // adding this here because it will affect the whole application not the search only
  const [bodyPart, setBodyPart] = useState(['all']);
  const [exercise, setExercises] = useState([]);
  return (
    <Box>

    <HeroBanner />
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart}  setBodyPart = {setBodyPart} />
    <Exercises  setExercises={setExercises} bodyPart={bodyPart}  setBodyPart = {setBodyPart} />

    </Box>
  )
}

export default Home
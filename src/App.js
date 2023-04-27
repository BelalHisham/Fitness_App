import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from "./components/Navbar";
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import AddWorkout from './pages/AddWorkout';
import Footer from './components/Footer';
import "./App.css";
import Login from './pages/Login';
import Signup from './pages/Signup'


const App = () => {
  return (
    <Box width = "400px" sx={{width: {xl: '1488px'}}} m = "auto">
        <Navbar />
       
        <Routes>
            <Route path= "/" element = {<Home/>} />
            <Route path= "/exercise/:id" element = {<ExerciseDetail/>} />
            <Route path= "/add_workout" element = {<AddWorkout />} />
            <Route path= "/login" element = {<Login />} />
            <Route path= "/signup" element = {<Signup />} />
       
        </Routes>
        
        <Footer />
    </Box>
  )
}

export default App
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from "./components/Navbar";
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import AddWorkout from './pages/AddWorkout';
import Footer from './components/Footer';
import "./App.css";
import Login from './pages/Login';
import Signup from './pages/Signup'
import { useAuthContext } from './hooks/useAuthContext';


const App = () => {
  const {user} = useAuthContext()
  return (
    <Box width = "400px" sx={{width: {xl: '1488px'}}} m = "auto">
        <Navbar />
       
        <Routes>
            <Route path= "/" element = {<Home/>} />
            <Route path= "/exercise/:id" element = {<ExerciseDetail/>} />
            <Route path= "/add_workout" element = {user ? <AddWorkout /> : <Navigate to="/login" /> } />
            <Route path= "/login" element = {!user ? <Login /> : <Navigate to = "/add_workout" />} />
            <Route path= "/signup" element = {!user ? <Signup /> : <Navigate to = "/add_workout" />} />
       
        </Routes>
        
        <Footer />
    </Box>
  )
}

export default App
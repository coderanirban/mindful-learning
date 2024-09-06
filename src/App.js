// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar';  // Import the Navbar component
import Home from './components/Home'; // Import Home page component
import Dashboard from './components/Dashboard';
import Quests from './components/Quests';
import MoodTracker from './components/MoodTracker';
import Leaderboard from './components/Leaderboard';
import LandingPage from './components/LandingPage';  // Import LandingPage
import MindfulnessExercise from './components/MindfulnessExercise';

// Import the custom styled components
import StyledButton from './components/StyledButton';
import Card from './components/Card';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  // Check login state

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {isLoggedIn && <Navbar />} {/* Show Navbar only if logged in */}
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} /> {/* Route for Home page */}
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/quests" element={isLoggedIn ? <Quests /> : <Navigate to="/" />} />
            <Route path="/moodtracker" element={isLoggedIn ? <MoodTracker /> : <Navigate to="/" />} />
            <Route path="/leaderboard" element={isLoggedIn ? <Leaderboard /> : <Navigate to="/" />} />
            <Route path="/mindfulness" element={isLoggedIn ? <MindfulnessExercise /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// src/components/Home.js
import React from 'react';
import { Grid, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    navigate('/dashboard'); // Navigate to the Dashboard page
  };

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ height: '100vh', backgroundColor: '#f0f4f8' }}>
      <Paper elevation={6} style={{ padding: 30, width: 400, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#3f51b5' }}>
          Welcome to Mindful Learning
        </Typography>
        <Typography variant="body1" paragraph>
          Discover a new way to learn with our gamified platform. Engage in interactive quests, track your mood, and enjoy mindfulness exercises designed to help you achieve a balanced and fulfilling learning experience.
        </Typography>
        <Typography variant="body2" paragraph>
          Our platform combines learning with fun through gamification, making education more engaging and less stressful. With features like mood tracking and personalized mindfulness exercises, you can stay motivated and centered throughout your learning journey.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGetStarted}>
          Get Started
        </Button>
      </Paper>
    </Grid>
  );
};

export default Home;

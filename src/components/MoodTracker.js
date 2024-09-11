import React, { useState, useCallback } from 'react';
import { Grid, Card, CardContent, Button, Typography, TextField, MenuItem, List, ListItem, ListItemText, Avatar, Divider, Paper, LinearProgress } from '@mui/material';
import Navbar from './Navbar';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Webcam from 'react-webcam'; // Import Webcam

// Mock data for the chart (replace with dynamic data)
const mockMoodData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Mood Score',
      data: [4, 3, 2, 5, 4, 3, 4],  // Mood levels (scale of 1-5)
      borderColor: '#3f51b5',
      backgroundColor: 'rgba(63, 81, 181, 0.2)',
      fill: true,
    },
  ],
};

const moodOptions = [
  { value: 'happy', label: '😊 Happy' },
  { value: 'neutral', label: '😐 Neutral' },
  { value: 'sad', label: '😢 Sad' },
  { value: 'stressed', label: '😫 Stressed' },
  { value: 'excited', label: '😃 Excited' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [moodNote, setMoodNote] = useState('');
  const [weeklyMood, setWeeklyMood] = useState(4);  // Placeholder for the average weekly mood score
  const [detectedMood, setDetectedMood] = useState('');  // Mood detected from webcam
  
  // Webcam reference
  const webcamRef = React.useRef(null);

  // Mock face detection logic based on random chance (just for illustration)
  const detectMoodFromFace = useCallback(() => {
    const moods = ['😊 Happy', '😢 Sad'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setDetectedMood(randomMood);
  }, []);

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  const handleMoodSubmit = () => {
    if (selectedMood) {
      // Save the mood to state or send it to a backend (add logic here)
      alert(`Mood recorded: ${selectedMood}`);
    }
  };

  const handleNoteChange = (event) => {
    setMoodNote(event.target.value);
  };

  return (
    <div>
      {/* <Navbar /> Add Navbar here */}
      <Grid container spacing={3} style={{ padding: 20 }}>
        {/* Daily Mood Entry */}
      <Grid container spacing={3} style={{ padding: 20 }}>
           {/* Left column - How Are You Feeling Today and Weekly Mood Summary */}
        <Grid item xs={12} md={6}>
          {/* How Are You Feeling Today */}
          <Card style={{ backgroundColor: '#e3f2fd', borderRadius: '10px', marginBottom: 20 }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#1e88e5' }}>How Are You Feeling Today?</Typography>
              <TextField
                select
                label="Select your mood"
                value={selectedMood}
                onChange={handleMoodChange}
                fullWidth
                style={{ marginTop: 20 }}
              >
                {moodOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Add a note (optional)"
                value={moodNote}
                onChange={handleNoteChange}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                style={{ marginTop: 20 }}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleMoodSubmit}
                style={{ marginTop: 20 }}
              >
                Submit Mood
              </Button>
            </CardContent>
          </Card>

          {/* Weekly Mood Summary */}
          <Card style={{ backgroundColor: '#f0f4c3', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#afb42b' }}>Weekly Mood Summary</Typography>
              <Typography variant="body1">Your average mood this week is:</Typography>
              <Typography variant="h2" style={{ color: '#388e3c', marginTop: 10 }}>{weeklyMood}</Typography>
              <LinearProgress variant="determinate" value={weeklyMood * 20} style={{ marginTop: 10, height: '10px', borderRadius: '5px' }} />
              <Typography variant="body2" style={{ marginTop: 10 }}>Keep tracking your mood daily for better insights!</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right column - Webcam and Face Mood Detection */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#e8f5e9', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#43a047' }}>Detect Mood from Face</Typography>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ width: '100%', marginBottom: 20 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={detectMoodFromFace}
              >
                Detect Mood
              </Button>
              {detectedMood && (
                <Typography variant="h6" style={{ color: '#43a047', marginTop: 20 }}>
                  Detected Mood: {detectedMood}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        </Grid>

        {/* Mood History (Calendar-like display) */}
        <Grid item xs={12}>
          <Card style={{ backgroundColor: '#fff3e0', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#ff9800' }}>Mood History</Typography>
              <Typography variant="body1" style={{ marginBottom: 20 }}>Here's a quick overview of your moods from this week:</Typography>

              <Line data={mockMoodData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Personalized Suggestions */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#f1f8e9', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#388e3c' }}>Personalized Mindfulness Suggestions</Typography>
              <List>
                <ListItem>
                  <Avatar alt="Breathing Exercise" src="/breathing-icon.jpg" />
                  <ListItemText primary="Breathing Exercise" secondary="Try a 5-minute deep breathing exercise to relax." />
                  <Button variant="outlined" color="primary" size="small">Start</Button>
                </ListItem>
                <Divider />
                <ListItem>
                  <Avatar alt="Meditation" src="/meditation-icon.jpg" />
                  <ListItemText primary="Guided Meditation" secondary="Engage in a 10-minute guided meditation for calmness." />
                  <Button variant="outlined" color="secondary" size="small">Start</Button>
                </ListItem>
                <Divider />
                <ListItem>
                  <Avatar alt="Stretching" src="/stretching-icon.jpg" />
                  <ListItemText primary="Stretching Routine" secondary="Take a break and do some light stretching exercises." />
                  <Button variant="outlined" color="primary" size="small">Start</Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Motivational Quotes Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#e8f5e9', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#43a047' }}>Motivational Quote of the Day</Typography>
              <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                <Typography variant="h6" align="center" style={{ fontStyle: 'italic' }}>
                  "The greatest weapon against stress is our ability to choose one thought over another." – William James
                </Typography>
              </Paper>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default MoodTracker;

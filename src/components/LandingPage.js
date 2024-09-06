import React, { useState } from 'react';
import { Grid, Button, TextField, Typography, Paper, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [tabValue, setTabValue] = useState(0);  // Switch between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // To navigate to the dashboard

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');  // Save login state
      navigate('/dashboard');  // Redirect to dashboard after login
    }
  };

  const handleSignup = () => {
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');  // Save signup state
      navigate('/dashboard');  // Redirect to dashboard after signup
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundColor: '#f0f4f8' }}>
      <Paper elevation={6} style={{ padding: 30, width: 400 }}>
        <Typography variant="h4" align="center" style={{ marginBottom: 20, color: '#3f51b5' }}>
          Welcome to Mindful Learning
        </Typography>

        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" style={{ marginBottom: 20 }}>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        {tabValue === 0 ? (
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                Login
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" fullWidth onClick={handleSignup}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
};

export default LandingPage;

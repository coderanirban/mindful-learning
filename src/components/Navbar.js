import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ 
      background: 'linear-gradient(to right, #a8caba, #5f9a77)', // Nature-inspired gradient
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      height: '180px' // Extend the height of the Navbar
    }}>
      <Toolbar sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img 
            src="/Mindfull_learning[1].png" 
            alt="Mindful Learning" 
            height="180px" // Extend the height of the image
            style={{ marginRight: '20px' }}
          />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/home">Mindful Learning</Button>
          </Typography>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/dashboard" 
            sx={{ height: '100px', padding: '0 20px', fontSize: '1rem' }}
          >
            Dashboard
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/quests" 
            sx={{ height: '100px', padding: '0 20px', fontSize: '1rem' }}
          >
            Quests
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/moodtracker" 
            sx={{ height: '100px', padding: '0 20px', fontSize: '1rem' }}
          >
            Mood Tracker
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/leaderboard" 
            sx={{ height: '100px', padding: '0 20px', fontSize: '1rem' }}
          >
            Leaderboard
          </Button>
          <Button 
            color="inherit" 
            onClick={handleLogout} 
            sx={{ height: '100px', padding: '0 20px', fontSize: '1rem' }}
          >
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

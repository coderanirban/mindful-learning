// Quests.js
import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemText, LinearProgress, Divider, TextField, InputAdornment, IconButton, Avatar, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import Navbar from './Navbar'; // Import Navbar

const Quests = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const renderQuestDetails = (quest) => {
    return (
      <Card style={{ backgroundColor: '#fff3e0', borderRadius: '10px', marginBottom: '15px' }}>
        <CardContent>
          <Typography variant="h6">{quest.title}</Typography>
          <Typography variant="body2">{quest.description}</Typography>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>Difficulty: {quest.difficulty}</Typography>
          <Typography variant="body2" style={{ fontWeight: 'bold', color: '#ff9800' }}>Reward: {quest.reward} points</Typography>
          <Button variant="contained" color="secondary" style={{ marginTop: 10 }}>Start Quest</Button>
        </CardContent>
      </Card>
    );
  };

  const quests = [
    { title: "Advanced Math Puzzle", description: "Solve complex math problems to sharpen your skills.", difficulty: "Hard", reward: 50 },
    { title: "Science Trivia Challenge", description: "Test your science knowledge in this timed quiz.", difficulty: "Medium", reward: 30 },
    { title: "History Quiz", description: "Prove your mastery of historical facts in this engaging quiz.", difficulty: "Easy", reward: 20 },
  ];

  const filteredQuests = quests.filter(quest => quest.title.toLowerCase().includes(searchQuery));

  return (
    <div>
      {/* <Navbar /> Add Navbar here */}
      <Grid container spacing={3} style={{ padding: 20 }}>

        {/* Quest Summary */}
        <Grid item xs={12}>
          <Card style={{ backgroundColor: '#e8f5e9', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#388e3c' }}>Quest Summary</Typography>
              <Typography variant="body1">Total Quests Completed: 10</Typography>
              <Typography variant="body1">Points Earned: 250</Typography>
              <LinearProgress variant="determinate" value={50} style={{ marginTop: 10, height: '10px', borderRadius: '5px' }} />
              <Typography variant="body2" style={{ marginTop: 10 }}>50% to unlock the next set of quests</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Search and Filter Section */}
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            placeholder="Search for quests..."
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            style={{ marginBottom: 20 }}
          />
        </Grid>

        {/* Quest Streak Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#ffebee', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#d32f2f' }}>Quest Streak</Typography>
              <Typography variant="body1">Current Streak: 5 Days</Typography>
              <Typography variant="body2">Keep going to earn more rewards!</Typography>
              <Button variant="contained" color="secondary" style={{ marginTop: 10 }}>Claim Streak Reward</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Available Quests */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#fff3e0', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#ff9800' }}>Available Quests</Typography>
              {filteredQuests.map((quest, index) => (
                <React.Fragment key={index}>
                  {renderQuestDetails(quest)}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Leaderboard Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#e3f2fd', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#1e88e5' }}>Quest Leaderboard</Typography>
              <List>
                <ListItem>
                  <Avatar alt="Player 1" src="/player1.jpg" />
                  <ListItemText primary="Player 1" secondary="Points: 500" />
                  <Chip icon={<StarIcon />} label="Top Player" color="primary" />
                </ListItem>
                <Divider />
                <ListItem>
                  <Avatar alt="Player 2" src="/player2.jpg" />
                  <ListItemText primary="Player 2" secondary="Points: 400" />
                </ListItem>
                <Divider />
                <ListItem>
                  <Avatar alt="Player 3" src="/player3.jpg" />
                  <ListItemText primary="Player 3" secondary="Points: 350" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Achievements and Badges */}
        <Grid item xs={12}>
          <Card style={{ backgroundColor: '#fafafa', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#424242' }}>Achievements & Badges</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Math Master Badge" secondary="Awarded for completing 5 math quests" />
                  <Chip label="Earned" color="success" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Science Explorer Badge" secondary="Awarded for completing 3 science quests" />
                  <Chip label="Earned" color="success" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="History Buff Badge" secondary="Awarded for completing 5 history quests" />
                  <Chip label="Earned" color="success" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default Quests;

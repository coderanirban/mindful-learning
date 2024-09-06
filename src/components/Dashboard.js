// Dashboard.js
import React from 'react';
import { Typography, Grid, Card, CardContent, LinearProgress, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import Navbar from './Navbar'; // Import Navbar

const Dashboard = () => {
  return (
    <div>
      {/* <Navbar /> Add Navbar here */}
      <Grid container spacing={3} style={{ padding: 20 }}>

        {/* User Progress Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#f0f4f8', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#3f51b5' }}>Your Progress</Typography>
              <Typography variant="body1">Level: 5</Typography>
              <LinearProgress variant="determinate" value={75} style={{ marginTop: 10, height: '10px', borderRadius: '5px' }} />
              <Typography variant="body2" style={{ marginTop: 10 }}>75% to the next level</Typography>
              <Typography variant="body1" style={{ marginTop: 20 }}>Points Earned: 250</Typography>
              <Typography variant="body1">Quests Completed: 10</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Achievements Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#f50057' }}>Achievements</Typography>
              <Typography variant="body1">Badge: Puzzle Master 🏅</Typography>
              <Typography variant="body1">Badge: Science Whiz 🧠</Typography>
              <Typography variant="body1">Badge: Fast Learner 🏆</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 10 }}>View All Achievements</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Next Quests Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#fff3e0', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#ff9800' }}>Next Quests</Typography>
              <Typography variant="body1">Advanced Math Puzzle</Typography>
              <Typography variant="body1">Science Trivia Challenge</Typography>
              <Button variant="contained" color="secondary" style={{ marginTop: 10 }}>Start Now</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Leaderboard Highlight Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#e8f5e9', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#388e3c' }}>Leaderboard Position</Typography>
              <Typography variant="body1">Rank: #3</Typography>
              <Typography variant="body1">Top 10% in Science Quizzes</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 10 }}>View Full Leaderboard</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Daily Challenges Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#e3f2fd', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#1e88e5' }}>Daily Challenges</Typography>
              <Typography variant="body1">- Complete 5 Math Puzzles</Typography>
              <Typography variant="body1">- Achieve a score of 80% or more in the Science Quiz</Typography>
              <Button variant="contained" color="secondary" style={{ marginTop: 10 }}>Take Challenge</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Rewards Section */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#fce4ec', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#ec407a' }}>Upcoming Rewards</Typography>
              <Typography variant="body1">Unlock 'Master of Math' Badge at Level 6</Typography>
              <Typography variant="body1">Earn 100 Bonus Points after completing 3 more quests</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 10 }}>View More Rewards</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity Section */}
        <Grid item xs={12}>
          <Card style={{ backgroundColor: '#fafafa', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#424242' }}>Recent Activity</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Completed: Math Puzzle Quest" secondary="2 hours ago" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Unlocked Achievement: Puzzle Master 🏅" secondary="Yesterday" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Ranked Up: Level 5 Achieved" secondary="3 days ago" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events Section */}
        <Grid item xs={12}>
          <Card style={{ backgroundColor: '#f1f8e9', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" style={{ color: '#8bc34a' }}>Upcoming Events</Typography>
              <Typography variant="body1">- Math Tournament: Starts in 3 days</Typography>
              <Typography variant="body1">- Weekly Science Quiz: Participate to win bonus points</Typography>
              <Button variant="contained" color="secondary" style={{ marginTop: 10 }}>Join Now</Button>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper, Grid, Button, IconButton, Avatar, TextField, InputAdornment } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Navbar from './Navbar';
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Leaderboard = () => {
  // Example leaderboard data
  const [search, setSearch] = useState('');
  const leaderboardData = [
    { name: 'Alice', points: 500, rank: 1, profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', achievements: ['Completed all math puzzles', 'Highest score in science quiz'], recentActivity: 'Completed 5 quizzes today' },
    { name: 'Bob', points: 450, rank: 2, profilePic: 'https://randomuser.me/api/portraits/men/2.jpg', achievements: ['Top performer of the month'], recentActivity: 'Achieved milestone in math puzzle' },
    { name: 'Charlie', points: 400, rank: 3, profilePic: 'https://randomuser.me/api/portraits/men/3.jpg', achievements: ['Solved 10+ science quizzes'], recentActivity: 'Participated in 3 new quizzes' },
    { name: 'Diana', points: 350, rank: 4, profilePic: 'https://randomuser.me/api/portraits/women/4.jpg', achievements: ['Highest score in math puzzles'], recentActivity: 'Completed 2 challenges today' },
    { name: 'Ethan', points: 300, rank: 5, profilePic: 'https://randomuser.me/api/portraits/men/5.jpg', achievements: ['Consistent performer'], recentActivity: 'Active in weekly challenges' },
  ];

  // Filtered data based on search input
  const filteredData = leaderboardData.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Chart data and options
  const chartData = {
    labels: leaderboardData.map(user => user.name),
    datasets: [
      {
        label: 'Points',
        data: leaderboardData.map(user => user.points),
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y} points`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div style={{ padding: 20 }}>
      {/* <Navbar /> */}
      <Typography variant="h4" gutterBottom></Typography>

      {/* Search Bar */}
      <Paper elevation={3} style={{ padding: 10, marginBottom: 20 }}>
        <TextField
          label="Search Leaderboard"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Grid container spacing={3}>
        {/* Leaderboard Table */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Top Performers</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Rank</strong></TableCell>
                  <TableCell><strong>Profile</strong></TableCell>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Points</strong></TableCell>
                  <TableCell><strong>Recent Activity</strong></TableCell>
                  <TableCell><strong>Achievements</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.rank}</TableCell>
                    <TableCell>
                      <Avatar src={user.profilePic} alt={user.name} />
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.points}</TableCell>
                    <TableCell>{user.recentActivity}</TableCell>
                    <TableCell>
                      <ul>
                        {user.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        {/* Points Distribution Chart */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Points Distribution</Typography>
            <Bar data={chartData} options={chartOptions} />
          </Paper>
        </Grid>
      </Grid>

      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
          Export to CSV
        </Button>
        <IconButton color="primary">
          <SortIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Leaderboard;

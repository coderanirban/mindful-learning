import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

const MathPuzzle = () => {
  const [solved, setSolved] = useState(false);

  const handleSolvePuzzle = () => {
    // Logic for solving the puzzle (for demo purposes, we assume it's correct)
    setSolved(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5">Solve the Math Puzzle!</Typography>
      <Typography variant="body1" gutterBottom>Drag the correct numbers to solve the equation: 5 + ? = 10</Typography>
      {!solved ? (
        <div>
          <Button variant="contained" color="primary" onClick={handleSolvePuzzle}>Drag Number 5</Button>
        </div>
      ) : (
        <Typography variant="h6" color="success">You solved it! 5 + 5 = 10</Typography>
      )}
    </div>
  );
};

export default MathPuzzle;

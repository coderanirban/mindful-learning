import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';

const MindfulnessExercise = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      alert('Time is up!');
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const startExercise = () => {
    setTimeLeft(300); // 5 minutes = 300 seconds
    setIsActive(true);
  };

  return (
    <div>
      <Typography variant="h5">Start a 5-minute Breathing Exercise</Typography>
      <Button variant="contained" color="secondary" onClick={startExercise}>Start</Button>
      {isActive && <Typography variant="h6">Time Left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</Typography>}
    </div>
  );
};

export default MindfulnessExercise;

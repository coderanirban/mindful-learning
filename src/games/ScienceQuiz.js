import React, { useState } from 'react';
import { Button, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const ScienceQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    setIsCorrect(selectedAnswer === 'Earth');
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5">Science Quiz</Typography>
      <Typography variant="body1" gutterBottom>What is the third planet from the sun?</Typography>
      <RadioGroup value={selectedAnswer} onChange={(e) => setSelectedAnswer(e.target.value)}>
        <FormControlLabel value="Mars" control={<Radio />} label="Mars" />
        <FormControlLabel value="Earth" control={<Radio />} label="Earth" />
        <FormControlLabel value="Venus" control={<Radio />} label="Venus" />
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>

      {isCorrect === true && <Typography variant="h6" color="success">Correct! Earth is the third planet.</Typography>}
      {isCorrect === false && <Typography variant="h6" color="error">Wrong answer. Try again!</Typography>}
    </div>
  );
};

export default ScienceQuiz;

import './style.css';

import submitScore from './userSubmission.js';
import displayScores from './displayScore.js';

displayScores();
const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh-btn');

submitBtn.addEventListener('click', () => {
  submitScore();
});
refreshBtn.addEventListener('click', () => {
  displayScores();
});


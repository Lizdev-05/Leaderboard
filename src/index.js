import './style.css';
import submitScore from './userSubmission.js';

const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh-btn');

submitBtn.addEventListener('click', submitScore());
// refreshBtn.addEventListener('click', refreshScores());

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
//   method: 'POST',
//   body: JSON.stringify({ name: 'Name of the game' }),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

import addScore from './addScore.js';

const scoreList = document.querySelector('.score-list');

const displayScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DzlwBaosw9TBCKGhI0Np');
  const data = await response.json();
  const { scores } = data;
  scores.sort((a, b) => b.score - a.score);
  scoreList.innerHTML = '';
  scores.forEach((score) => {
    addScore(score.user, score.score);
  });
};

export default displayScores;
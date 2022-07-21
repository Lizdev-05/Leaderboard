import addScore from './addScore.js';

const scoreList = document.querySelector('.score-list');

const displayScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uYVsG2opMIxGzXLZzXmj/scores');
  const data = await response.json();
  let dataArray = data.result;
  dataArray = dataArray.sort((a, b) => b.score - a.score);
  scoreList.innerHTML = '';
  dataArray.forEach((score) => {
    addScore(score.user, score.score);
  });
};

export default displayScores;
const userName = document.getElementById('user-name');
const userScore = document.getElementById('user-score');

const submitScore = async () => {
  const nameValue = userName.value;
  const scoreValue = userScore.value;
  if (nameValue !== '' && scoreValue !== '') {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uYVsG2opMIxGzXLZzXmj/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: nameValue,
        score: scoreValue,
      }),
    });
  }
};

export default submitScore;
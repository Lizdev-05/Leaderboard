const scoreList = document.querySelector('.score-list');

const addScore = (name, score) => {
  const li = document.createElement('li');
  li.innerHTML = `${name} - ${score}`;
  scoreList.appendChild(li);

  const index = [...document.querySelectorAll('.li')].length;
  if (index % 2 === 0) {
    scoreList.classList.add('even');
  } else {
    scoreList.classList.add('odd');
  }
};
export default addScore;
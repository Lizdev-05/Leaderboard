const scoreList = document.querySelector('.score-list');

const addScore = (name, score) => {
  const li = document.createElement('li');
  li.innerHTML = `${name} : ${score}`;
  scoreList.appendChild(li);

  const index = [...document.querySelectorAll('li')].length;
  if (index % 2 === 0) {
    li.classList.add('even');
  } else {
    li.classList.add('odd');
  }
};
export default addScore;
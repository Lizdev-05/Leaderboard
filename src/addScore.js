const scoreList = document.querySelector('.score-list');

const addScore = (name, score) => {
  const li = document.createElement('li');
  li.innerHTML = ` 👤 ${name} : ${score}`;
  scoreList.appendChild(li);
  if (score >= 1000) {
    li.innerHTML = `👤 ⭐⭐⭐ ${name} : ${score}`;
  } else if (score >= 500 && score < 1000) {
    li.innerHTML = `👤 ⭐⭐ ${name} : ${score}`;
  } else if (score < 500) {
    li.innerHTML = `👤 ⭐ ${name} : ${score}`;
  }
  const index = [...document.querySelectorAll('li')].length;
  if (index % 2 === 0) {
    li.classList.add('even');
  } else {
    li.classList.add('odd');
  }
};
export default addScore;
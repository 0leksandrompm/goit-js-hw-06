function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor())

const bgColor = document.querySelector('.color');
const changeBg = document.querySelector('.change-color')
const vidg= document.querySelector('.widget');



changeBg.addEventListener('click', () => {
  bgColor.textContent = getRandomHexColor();
  vidg.parentNode.style.backgroundColor = getRandomHexColor();
})

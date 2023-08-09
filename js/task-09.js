function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bgColor = document.querySelector('.color');
const changeBg = document.querySelector('.change-color')
const vidg= document.querySelector('.widget');



changeBg.addEventListener('click', () => {
  const color = getRandomHexColor();
  // console.log(color)
  bgColor.textContent = color;
  // console.log(color)
  vidg.parentNode.style.backgroundColor = color;
  // console.log(color)
})

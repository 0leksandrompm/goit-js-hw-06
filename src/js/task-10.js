function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const contrBox =document.querySelector("#controls")
const boxBox =document.querySelector("#boxes ")
const divka = document.createElement("div");

contrBox.addEventListener("submit", createBoxes);

function createBoxes(amount){
  const quantity=[];

  const { elements: { email, password }} = evt.currentTarget;

  for (let i=0; 1<amount; i+=1){
    if (Number(amount)>=1){
      quantity.push(amount(i))
    }
  }
  console.log(quantity)
  boxBox.append(...quantity)
}
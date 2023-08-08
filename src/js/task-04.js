let counterValue = 0;
let valueMeter = document.querySelector('#counter #value');

const up = valueMeter.previousElementSibling.addEventListener("click", goDown);

const down = valueMeter.nextElementSibling.addEventListener("click", goUp);

function goUp() {
    counterValue += 1;
    valueMeter.textContent=counterValue;
    console.log(counterValue);
} 

function goDown() {
    counterValue -= 1;
    valueMeter.textContent=counterValue;
    console.log(counterValue);
} 




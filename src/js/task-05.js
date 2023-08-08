
let output = document.querySelector('#name-output');
let input = document.querySelector('#name-input');

input.addEventListener("input", vvod);

function vvod(evt){
    output.textContent=evt.currentTarget.value.trim();
    if (evt.currentTarget.value.trim()===""){
        output.textContent="Anonymous";
    }
}
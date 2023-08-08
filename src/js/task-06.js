let validation = document.querySelector('#validation-input');

console.log(validation.getAttribute('data-length'))

validation.addEventListener("blur", vvod);

function vvod(evt){
     if (evt.currentTarget.value.length>=Number(validation.getAttribute('data-length'))){
        validation.classList.remove("invalid");
        validation.classList.add("valid");
    } else{
        validation.classList.remove("valid");
        validation.classList.add("invalid");
        
    }
}

const lgForm =document.querySelector(".login-form")

lgForm.addEventListener("submit", vvod);

function vvod (evt){
    evt.preventDefault();
    const { elements: { email, password }} = evt.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
    }
  
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    evt.currentTarget.reset();
  }
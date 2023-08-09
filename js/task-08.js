
const lgForm =document.querySelector(".login-form")

lgForm.addEventListener("submit", vvod);

function vvod (evt){
    evt.preventDefault();
    const { elements: { email, password }} = evt.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
    }

    const obj ={};
    obj.email = email.value
    obj.password = password.value
    console.log(obj)
  
    // console.log(`email: ${email.value}, password: ${password.value}`);
    evt.currentTarget.reset();
  }
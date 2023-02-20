const form = document.getElementById("form");
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    validationInputs();
});

function validationInputs(){
    const usernameValue = username.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if(usernameValue === ""){
        setErrorFor(username, "First Name cannot be empyt");
     } else{
        setSuccessFor(username);
    }

    if(lastnameValue === ""){
        setErrorFor(lastname, "Last Name cannot be empy");
    }else{
        setSuccessFor(lastname);
    }

    if (emailValue === "") {
        setErrorFor(email, "Looks like this is not an email");
      } 
      else if (!validationEmail(emailValue)) {
        setErrorFor(email, "Email@exemple.com");
      }
      else {
        setSuccessFor(email);
      }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be empyt");
    }else{
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    small.innerText = message;
  
    formControl.className = "form-control error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    formControl.className = "form-control success";
  }


  /*Função de validação de formato de email*/
  function validationEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
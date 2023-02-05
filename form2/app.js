const form = document.querySelector("form");
const submit = document.querySelector(".submit");
const inputs = Array.from(document.querySelectorAll("input:not(input[type=checkbox])"));
const spans = Array.from(document.querySelectorAll("input + span"));
let count = 0;
let error;


inputs.forEach(input => {
  input.addEventListener("input", ()=>{
    count = inputs.indexOf(input)
    error = spans[count]
    if(input.validity.valid){
      error.textContent = "";
    }
    else{
      showerror(input);
    }
  })
})

function showerror(item){
  if(item.validity.valueMissing){
    error.textContent = "This field should not be blank"
  }
  else if(item.validity.typeMismatch){
    error.textContent = "A valid email address must contain a @ and a domain"
  }
  else if(item.validity.tooShort){
    error.textContent = `Sorry, minimum of ${item.minlength} characters required`
  }
}

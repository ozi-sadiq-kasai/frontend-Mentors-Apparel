let button = document.querySelector('button');
let input = document.querySelector('#email')
let symbol = document.querySelector('.error')
let errorMessage = document.querySelector('.error-p')
let form = document.querySelector('form')

function validate(e){
    e.preventDefault()
    let inputValue = input.value.trim()

    if(!isEmail(inputValue)){
        errorMessage.style.display = 'block'
        symbol.style.display='block'
    }
    else{
        errorMessage.style.display = 'none'
    }
}
function isEmail(input){
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}
button.addEventListener('click',validate)
form.addEventListener('submit',validate)


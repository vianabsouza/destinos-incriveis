const form = document.getElementById('form')
const username= document.getElementById('username')
const email = document.getElementById('email')
const numbercontact = document.getElementById('number-contact')
const textcontact = document.getElementById('text-contact')


username.addEventListener('change', (e) => {
    const usernameValue = e.target.value
    if (usernameValue === ''){
        errorValidation(username, 'Campo obrigatorio')
    }else if (usernameValue.length < 3){
        errorValidation(username, 'O nome deve conter pelo menos 3 caracter');
    } else {
        sucessValidation(username);
    }
})

email.addEventListener('change', (e)=> {
    const emailValue = e.target.value
    if (emailValue === ''){
        errorValidation(email, 'Campo obrigatorio')
    }else if(emailValue.includes('@') && emailValue.includes('.com')){
        sucessValidation(email);
    } else {
        errorValidation(email, "O email deve conter '@' e o '.com'");
    }
})

numbercontact.addEventListener('change', (e)=>{
    const numberValue = e.target.value;

    if (numberValue === ''){
        errorValidation(numbercontact, 'Campo obrigatorio')
    }else if (numberValue.length < 10 || numberValue.length > 11) {
        errorValidation(numbercontact, 'Número de telefone inválido. Deve conter 10 ou 11 dígitos.');
    } else {
        sucessValidation(numbercontact);
    }
})

textcontact.addEventListener('change', (e)=>{
    const textcontactValue = e.target.value;

    if (textcontactValue === ''){
        errorValidation(textcontact, 'Campo obrigatorio')
    }else if(textcontactValue.length < 15){
        errorValidation(textcontact, 'A mensagem deve ter mais de 15 caracteres');
    } else {
        sucessValidation(textcontact);
    }
})

function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    small.innerText = message;
    small.style.visibility = 'visible';

    formControl.className = 'form-control error';
}

function sucessValidation(input){
    console.log(input);
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    small.style.visibility = 'hidden';

    formControl.className = 'form-control success';
}
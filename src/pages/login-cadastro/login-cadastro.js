let loginSection = document.getElementById('loginSection');
let signUpSection = document.getElementById('signUpSection');
let loginPageBtn = document.getElementsByClassName('loginPageBtn');
let signUpPageBtn = document.getElementsByClassName('signUpPageBtn');
function openLogin() {
    signUpSection.classList.add('disabled');
    console.log(signUpSection.classList)
    loginSection.classList.remove('disabled');
    console.log('oi')
}

function openSignUp() {
    signUpSection.classList.remove('disabled');
    loginSection.classList.add('disabled')
    console.log(signUpSection.classList)
}

loginPageBtn[0].addEventListener('click',openLogin);
signUpPageBtn[0].addEventListener('click',openSignUp);
loginPageBtn[1].addEventListener('click',openLogin);
signUpPageBtn[1].addEventListener('click',openSignUp);

// FUNÇÕES GERAIS
function togglePopup(input,label,helper = ''){
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus",() =>{
        label.classList.add("required-popup");
    });

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur",()=>{
        label.classList.remove("required-popup");
    })

    if(helper !== ''){
        input.addEventListener("focus",() =>{
            helper.classList.add("passwordInstructionsHelper");
        });
    
        input.addEventListener("blur",()=>{
            helper.classList.remove("passwordInstructionsHelper");
        })
    
    }
}

function stylizeCorrectInput(input,helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function stylizeIncorrectInput(input,helper){
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}

function validateEmail(email){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function hasSpecialCharacters(password){
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(password);
}

function hasNumber(password){
    const regex =  /\d/;
    return regex.test(password)
}

function toggleCharactersNumberHelper(password,helper){
    if (password >= 8) {
        helper.wrongIcon.classList.add('disabled')
        helper.correctIcon.classList.remove('disabled')
    }else{
        helper.wrongIcon.classList.remove('disabled')
        helper.correctIcon.classList.add('disabled')
    }
}

function toggleSpecialCharactersHelper(password,helper){
    if (hasSpecialCharacters(password)) {
        helper.wrongIcon.classList.add('disabled')
        helper.correctIcon.classList.remove('disabled')
    }else{
        helper.wrongIcon.classList.remove('disabled')
        helper.correctIcon.classList.add('disabled')
    }
}

function toogleHasNumbersHelpers(password,helper) {
    if (hasNumber(password)) {
        helper.wrongIcon.classList.add('disabled')
        helper.correctIcon.classList.remove('disabled')
    }else{
        helper.wrongIcon.classList.remove('disabled')
        helper.correctIcon.classList.add('disabled')
    }
}

let loginInputs = {
    email: false,
    password: false
}

let signUpInputs = {
    firstName : false,
    lastName : false,
    email : false,
    password : false,
    passwordCheck: false
}

//----- VALIDAR EMAIL DE LOGIN -----//
let loginEmailInput = document.getElementById('email');
let loginEmailLabel = document.querySelector('label[for="email"] span');
let loginEmailHelper = document.getElementById('email-login-helper');

togglePopup(loginEmailInput,loginEmailLabel)

loginEmailInput.addEventListener("change", (e) => {
    let value = e.target.value;

    if(validateEmail(value)){
        stylizeCorrectInput(loginEmailInput,loginEmailHelper);
        loginInputs.email = true
    }else{
        loginEmailHelper.innerText = "Insira um email válido"
        stylizeIncorrectInput(loginEmailInput,loginEmailHelper);
        loginInputs.email = false
    }
})

// ----- VALIDAR INPUT DE NOME -----//
let nameInput = document.getElementById('name');
let nameLabel = document.querySelector('label[for="name"] span');
let nameHelper = document.getElementById('name-helper');

togglePopup(nameInput,nameLabel);

nameInput.addEventListener("change",(e) => {
    let value = e.target.value;

    if (value.length >= 3) {
        stylizeCorrectInput(nameInput,nameHelper)
        signUpInputs.firstName = true
    } else {
        nameHelper.innerText = "O campo precisa ter pelo menos 3 caracteres"
        stylizeIncorrectInput(nameInput,nameHelper)
        signUpInputs.firstName = false
    }
})
// ----- VALIDAR INPUT DE SOBRENOME -----//
let lastNameInput = document.getElementById('lastName');
let lastNameLabel = document.querySelector('label[for="lastName"] span');
let lastNameHelper = document.getElementById('last-name-helper');

togglePopup(lastNameInput,lastNameLabel);

lastNameInput.addEventListener("change",(e) => {
    let value = e.target.value;

    if (value.length >= 3) {
        stylizeCorrectInput(lastNameInput,lastNameHelper)
        signUpInputs.lastName = true
    } else {
        lastNameHelper.innerText = "O campo precisa ter pelo menos 3 caracteres"
        stylizeIncorrectInput(lastNameInput,lastNameHelper)
        signUpInputs.lastName = false
    }
})
// ----- VALIDAR INPUT DE EMAIL PARA CADASTRO -----//
let signUpEmailInput = document.getElementById('signup-email');
let signUpEmailLabel = document.querySelector('label[for="signup-email"] span');
let signUpEmailHelper = document.getElementById('email-signup-helper');

togglePopup(signUpEmailInput,signUpEmailLabel)

signUpEmailInput.addEventListener("change", (e) => {
    let value = e.target.value;

    if(validateEmail(value)){
        stylizeCorrectInput(signUpEmailInput,signUpEmailHelper);
        signUpInputs.email = true
    }else{
        signUpEmailHelper.innerText = "Insira um email válido"
        stylizeIncorrectInput(signUpEmailInput,signUpEmailHelper);
        signUpInputs.email = false
    }
})

// ----- VALIDAR INPUT DE SENHA PARA CADASTRO -----//
let signUpPasswordInput = document.getElementById('signup-password');
let signUpPasswordLabel = document.querySelector('label[for="signup-password"] span');
let signUpPasswordHelper = document.getElementById('password-signup-helper');
let passwordInstructionsHelper = document.querySelector('ul')

togglePopup(signUpPasswordInput,signUpPasswordLabel,passwordInstructionsHelper)

signUpPasswordInput.addEventListener("input",(e) =>{
    let value = e.target.value;
    let atLeastEightCharacters = {
        wrongIcon:document.querySelector('#atLeastEightCharacters .wrongIcon'),
        correctIcon:document.querySelector('#atLeastEightCharacters .correctIcon'),
    }
    let specialCharacters = {
        wrongIcon:document.querySelector('#hasSpecialCharacter .wrongIcon'),
        correctIcon:document.querySelector('#hasSpecialCharacter .correctIcon'),
    }
    let atLeastOneNumber = {
        wrongIcon:document.querySelector('#atLeastOneNumber .wrongIcon'),
        correctIcon:document.querySelector('#atLeastOneNumber .correctIcon'),
    }

    toggleCharactersNumberHelper(value.length,atLeastEightCharacters)
    toggleSpecialCharactersHelper(value,specialCharacters)
    toogleHasNumbersHelpers(value,atLeastOneNumber)

})

signUpPasswordInput.addEventListener('blur',(e) => {
    let value = e.target.value

    if ( (value.length >=8) &&
    hasNumber(value) &&
    hasSpecialCharacters(value)
    ) {
        stylizeCorrectInput(signUpPasswordInput,signUpPasswordHelper);
        signUpInputs.password = true
    } else {
        signUpPasswordHelper.innerText = "Insira uma senha válida"
        stylizeIncorrectInput(signUpPasswordInput,signUpPasswordHelper);
        signUpInputs.password = false
    } 
})

// ----- VALIDAR CONFIRMAÇÃO DE SENHA ----- //
let passwordCheckInput = document.getElementById('passwordCheck');
let passwordCheckLabel = document.querySelector('label[for="passwordCheck"] span');
let passwordCheckHelper = document.getElementById('password-check-signup-helper');

togglePopup(passwordCheckInput,passwordCheckLabel)

passwordCheckInput.addEventListener("change",(e) => {
    let value = e.target.value;

    if (value == signUpPasswordInput.value) {
        stylizeCorrectInput(passwordCheckInput,passwordCheckHelper);
        signUpInputs.passwordCheck = true;
    } else {
        passwordCheckHelper.innerText = "As senhas precisam ser iguais"
        stylizeIncorrectInput(passwordCheckInput,passwordCheckHelper);
        signUpInputs.passwordCheck = false;
    }
})

// EVITAR ENVIO DO FORMULÁRIO
let btnSubmit = document.getElementsByClassName('btnSubmit');
btnSubmit[0].addEventListener("click", (e) => {
    if(!loginInputs.email ||
    !loginInputs.password){
        e.preventDefault()
    }else{
        alert("Formulário enviado com sucesso");
    }
})

btnSubmit[1].addEventListener("click", (e) => {
    if(signUpInputs.email &&
    signUpInputs.firstName &&
    signUpInputs.lastName &&
    signUpInputs.password &&
    signUpInputs.passwordCheck){
        alert("Formulário enviado com sucesso");
    }else{
        e.preventDefault()
    }
})
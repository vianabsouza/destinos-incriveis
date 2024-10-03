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
function togglePopup(input,label){
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus",() =>{
        label.classList.add("required-popup");
    });

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur",()=>{
        label.classList.remove("required-popup");
    })
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
    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
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

togglePopup(signUpPasswordInput,signUpPasswordLabel)

signUpPasswordInput.addEventListener("blur",(e) =>{})
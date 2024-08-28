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
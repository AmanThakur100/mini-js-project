const passwordBox = document.getElementById("Password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()<>?{}|";

const allchars = lowerCase + upperCase + symbol + number;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(lenght > password.length){
        password += allchars[Math.floor(Math.random()*symbol.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
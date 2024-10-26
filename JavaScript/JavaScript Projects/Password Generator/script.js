let passwordbox = document.getElementById("Password");
let length = 12;
let button = document.querySelector("button");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>/?~|";

const allChar = uppercase + lowercase + numbers + symbols;

function generatePassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordbox.value = password;
}

button.addEventListener("click", generatePassword);

function copypassword() {
    passwordbox.select();
    document.execCommand("copy");
    alert("Password copied!");
}
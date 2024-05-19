
let passwordBox=document.getElementById("password");
let upperCase="QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerCase="qwertyuiopasdfghjklzxcvbnm";
let symbol="!@#$%^&*()_{}|?><:";
let number="0123456789";
let length=12;
let Allchar= upperCase+ lowerCase + symbol+ number;
function generatePassword(){
    let password  = "";
     password+=upperCase[Math.floor(Math.random()*upperCase.length)];
     password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
     password+=symbol[Math.floor(Math.random()*symbol.length)];
     password+=number[Math.floor(Math.random()*number.length)];

     while(length> password.length)
     { password += Allchar[Math.floor(Math.random()*Allchar.length)];
     }
     passwordBox.value=password;
}
function copypassword(){
       passwordBox.select();
       document.execCommand("copy");
}
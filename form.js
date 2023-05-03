var Loginform = document.getElementById("Loginform");
var Regform = document.getElementById("Regform");
var indicator = document.getElementById("indicator");

function register(){
    Regform.style.transform = "translateX(0px)"; 
    Loginform.style.transform = "translateX(0px)"; 
    indicator.style.transform = "translateX(100px)"; 
}

function login(){
    Regform.style.transform = "translateX(300px)"; 
    Loginform.style.transform = "translateX(300px)"; 
    indicator.style.transform = "translateX(0px)"; 
}
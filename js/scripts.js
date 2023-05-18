var boton = document.getElementById('boton');
var password = document.getElementById('contr');
var icon = document.getElementById('icon');


boton.addEventListener('click', mostrar_contraseña);

function mostrar_contraseña(){
    if(password.type == "password"){
        password.type = "text";
        icon.innerText ="visibility_off";
    }else{
        password.type = "password";
        icon.innerText ="visibility";
    }
}
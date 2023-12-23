const emailVerify = "Mali"
const passwordVerify = "1"
const saldo = "200";

const logIn = document.getElementById('formulario')

logIn.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(email === emailVerify && password === passwordVerify){
        window.location.href = "firstPage.html"
    }else{
        const mensaje = document.createElement("p")
        mensaje.textContent = "Correo No Existe"
        mensaje.setAttribute("style", "color: red, font-size: 12px")

        document.body.appendChild(mensaje)
    }
})

const emailVerify1 = "Gera"
const passwordVerify1 = "2"
const saldo1 = "290";

const logIn1 = document.getElementById('formulario')

logIn.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(email === emailVerify1 && password === passwordVerify1){
        window.location.href = "firstPage.html"
    }else{
        const mensaje = document.createElement("p")
        mensaje.textContent = "Correo No Existe"
        mensaje.setAttribute("style", "color: red, font-size: 12px")

        document.body.appendChild(mensaje)
    }
})

const emailVerify2 = "Maui"
const passwordVerify2 = "3"
const saldo2 = "67";

const logIn2 = document.getElementById('formulario')

logIn.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(email === emailVerify2 && password2 === passwordVerify2){
        window.location.href = "firstPage.html"
    }else{
        const mensaje = document.createElement("p")
        mensaje.textContent = "Correo No Existe"
        mensaje.setAttribute("style", "color: red, font-size: 12px")

        document.body.appendChild(mensaje)
    }
})


function mostrarDatos(){
    const mensaje = document.createElement("p")
        mensaje.textContent = "Saldo Es: $" + saldo;
        mensaje.setAttribute("style", "color: red, font-size: 12px")

        document.body.appendChild(mensaje)
    
}

function consultarSaldo(){
    var dinero = dinero;
    mostrarDatos("Saldo Es: $" + dinero)
}


function ingresarMonto(){
    var dinero = parseFloat(prompt("Ingresa El Monto:"));

    if(!isNaN(saldo) && saldo > 0){
        var nuevo = saldo + dinero;
        if(nuevo <= 990){
            saldo += dinero;
        mostrarDatos("Dinero Ingresado: $" + dinero
        + "Saldo: $" + saldo); 
    }
    }
}
    function retirarMonto(){
        var dineroRet = parseFloat(prompt("Ingresa El  A Retirar:"));

        if(!isNaN(dineroRet) && dineroRet > 0 && dineroRet <= emailVerify.saldo && emailVerify.saldo - dinero >= 10){
            emailVerify.saldo - dinero;
            mostrarDatos("Dinero Retirado: $" + dinero
        + "Saldo: $" + emailVerify.saldo);  
        }
    }


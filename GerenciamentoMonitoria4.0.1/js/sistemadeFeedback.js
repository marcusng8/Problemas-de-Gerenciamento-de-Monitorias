/*Navigation bar*/
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

/*Fim Navigation bar*/

let btnEnviar = document.getElementById('btn-enviar');
let nomeCampo = document.getElementById('nomeCampo');
let appRating = document.getElementById('app-rating');
let monitoriapRating = document.getElementById('mon-rating');
let campoTexto = document.getElementById('campoTexto');
//btnEnviar.disabled = true;
    
btnEnviar.onclick = ()=>{
    if(nomeCampo.value.length == 0){
        alert("Campos vazios")
    }else{
        enviarFb(nomeCampo.value, appRating.value, monitoriapRating.value, campoTexto.value);
    }
}

function enviarFb(nome, app, mon, campo){
    let usuario = JSON.parse(localStorage.getItem('user'));
  
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `https://servergerenciamento.herokuapp.com/feedback`);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.status == "201"){
            alert("Enviado com sucesso!");
            window.location.reload();
        }
    }
    xhr.send(
        `
        {
            "usuarioId": ${usuario.id},
            "nomeUsuario":"${nome}",
            "appRating":"${app}",
            "monRating":"${mon}",
            "comentarios":"${campo}"
        }
        `
    );
}
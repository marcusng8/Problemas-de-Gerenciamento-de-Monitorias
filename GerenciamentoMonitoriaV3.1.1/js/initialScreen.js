
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
/*AJAX pra pegar as atividades do db.json*/

function obtemInfos(){
    let usuario = JSON.parse(localStorage.getItem('user'));

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://servergerenciamento.herokuapp.com/usuarios/${usuario.id}/atividades`);
    xhr.onload = exibeAtividades;
    xhr.send();
}

function exibeAtividades(dados){
    let elemTela = document.getElementById('lista-ativ');

    dados = JSON.parse(this.responseText);

    let textHtml = '';

    for(i = 0; i < dados.length;i++){
        textHtml += `<tr><td>${dados[i].numero}</td>
        <td>${dados[i].atividade}</td>
        <td>${dados[i].dataDia}/${dados[i].dataMes}/${dados[i].dataAno} - ${dados[i].dataHora}:${dados[i].dataMinuto}</td>
        <td>${dados[i].localPredio} / ${dados[i].localSala}</td></tr>`;
    }
    elemTela.innerHTML = textHtml;
}

console.log(3);
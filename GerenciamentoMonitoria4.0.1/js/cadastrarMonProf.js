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

let btnAdd = document.getElementById('btn-adicionar')

let nomeAtiv = document.getElementById('atividade')
let numAtiv = document.getElementById('numero')
let dataDia = document.getElementById('dataDia')
let dataMes = document.getElementById('dataMes')
let dataAno = document.getElementById('dataAno')
let dataHora = document.getElementById('dataHora')
let dataMin = document.getElementById('dataMinuto')
let sala = document.getElementById('sala')
let predio = document.getElementById('predio')

btnAdd.onclick = (e) =>{
    if(nomeAtiv.value.length == 0 || numAtiv.value.length == 0 || dataDia.value.length == 0 || dataMes.value.length == 0
        || dataAno.value.length == 0 || dataHora.value.length == 0 || dataMin.value.length == 0 || sala.value.length == 0
        || predio.value.length == 0){
        alert("Algum campo não foi preenchido!");
        e.preventDefault()
    }else cadastrarMon(nomeAtiv.value, numAtiv.value, dataDia.value, dataMes.value, dataAno.value, dataHora.value, dataMin.value, sala.value, predio.value);
}

function cadastrarMon(nome, num, dia, mes, ano, hra, min, sala, predio){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `https://servergerenciamento.herokuapp.com/atividadesDisponiveis`);
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
            "numero": "${num}",
            "atividade": "${nome}",
            "dataDia": "${dia}",
            "dataMes": "${mes}",
            "dataAno": "${ano}",
            "dataHora": "${hra}",
            "dataMinuto": "${min}",
            "localSala": "${sala}",
            "localPredio": "${predio}"
          }
        `
    );
}
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


function obtemInfos(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://servergerenciamento.herokuapp.com/atividadesDisponiveis');
    xhr.onload = exibeCadastroAtividades;
    xhr.send();
}

function exibeCadastroAtividades(dados){
    let eleHtml = document.getElementById('list-ativ');

    dados = JSON.parse(this.responseText);

    let textHtml = '';

    for(i = 0; i <dados.length; i++){
        textHtml += `
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${dados[i].atividade}</h5>
              <p class="card-text">${dados[i].dataDia}/${dados[i].dataMes}/${dados[i].dataAno} - Prédio:${dados[i].localPredio} / Sala:${dados[i].localSala}</p>
              <a href="#" class="btn btn-primary" id="btn-adicionar" onclick="postaInfos()">Entrar Monitoria</a>
            </div>
          </div>
        </div>
        `;
  }

  eleHtml.innerHTML = textHtml;
}

function postaInfos(){
  let usuario = JSON.parse(localStorage.getItem('user'));

  let xhr = new XMLHttpRequest();
  xhr.open('POST', `https://servergerenciamento.herokuapp.com/usuarios/${usuario.id}/atividades`);
  xhr.onload = processaResposta;
  xhr.send(
    `
    {
      "numero": "7816786",
      "atividade": "Monitoria Banco de dados",
      "dataDia": "05",
      "dataMes": "05",
      "dataAno": "2020",
      "dataHora": "10",
      "dataMinuto": "30",
      "localSala": "103",
      "localPredio": "43"
    }
    `
  );
}

function processaResposta(){}
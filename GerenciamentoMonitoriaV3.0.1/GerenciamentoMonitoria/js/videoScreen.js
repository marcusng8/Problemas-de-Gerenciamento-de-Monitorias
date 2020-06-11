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
/*AJAX pra pegar os videos do db.json*/

function obtemInfos() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://servergerenciamento.herokuapp.com/videos');
    xhr.onload = exibeVideos;
    xhr.send();
}

function exibeVideos(dados) {
    let elemTela = document.getElementById('list-video');

    dados = JSON.parse(this.responseText);

    let textHtml = '';

    for (i = 0; i < dados.length; i++) {
        textHtml += `
        <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <iframe width="100%" height="140" class="video" src=${dados[i].link} allow="accelerometer;
                autoplay; encrypted-media;
                gyroscope;
                picture-in-picture" frameborder="0" allowfullscreen class="video">
            </iframe>
            <div class="card-body">
                <h4 class="card-title">Monitoria ${dados[i].nome}</h4>
                <p class="card-text">Vídeos sobre as monitorias gravadas</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Professor: ${dados[i].prof}</li>
                <li class="list-group-item">Data: ${dados[i].data[0].dia}/${dados[i].data[0].mes}/${dados[i].data[0].ano}</li>
            </ul>
            <div class="card-body">
                <a href="${dados[i].link}" class="card-link">Link para o YT</a>
            </div>
        </div>
        </div>
        `;
    }
    elemTela.innerHTML = textHtml;
}
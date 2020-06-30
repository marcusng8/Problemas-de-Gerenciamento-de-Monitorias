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


function chamadaFb(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://servergerenciamento.herokuapp.com/feedback');
    xhr.onload = mostraFb;
    xhr.send();
}

function mostraFb(dados){
    let tela = document.getElementById('cards-fb');
    let text = '';

    dados = JSON.parse(this.responseText);
    console.log(dados)

    for(i = 0; i < dados.length; i++){
        text+=`<div class="card text-white bg-dark mb-3">
                    <h5 class="card-header">${dados[i].nomeUsuario}</h5>
                    <div class="card-body">
                        <p class="card-text">${dados[i].comentarios}</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <br>
                        <a title="Deletar feedback" href="#" onclick="deletarAula(${dados[i].id})"><i style="color:red;" class="fas fa-times"></i>Remover Feedback</a>
                    </div>
                </div>
                `
    }

    tela.innerHTML = text;
}

function deletarAula(id){
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', `https://servergerenciamento.herokuapp.com/feedback/${id}`);
    xhr.onload = function(){
        if(xhr.status == "200"){
            alert("Deletado com sucesso!");
            window.location.reload();
        }else{
            alert("Algum erro ocorreu!");
        }
    };
    xhr.send(null);
}
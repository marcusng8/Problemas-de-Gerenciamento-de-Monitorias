
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
    let id = JSON.parse(localStorage.getItem('user'));

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://servergerenciamento.herokuapp.com/usuarios/${id.id}`);
    xhr.onload = exibeAtividades;
    xhr.send();
}

function exibeAtividades(dados){
    let elemTela = document.getElementById('lista-ativ');

    dados = JSON.parse(this.responseText);

    let textHtml = '';

    for(i = 0; i < dados.atividadesAluno.length;i++){
        textHtml += `<tr><td>${dados.atividadesAluno[i].numero}</td>
        <td>${dados.atividadesAluno[i].atividade}</td>
        <td>${dados.atividadesAluno[i].data[0].dia}/${dados.atividadesAluno[i].data[0].mes}/${dados.atividadesAluno[i].data[0].ano} - ${dados.atividadesAluno[i].data[0].hora}:${dados.atividadesAluno[i].data[0].min}</td>
        <td>${dados.atividadesAluno[i].local[0].predio} / ${dados.atividadesAluno[i].local[0].sala}</td></tr>`;
    }
    elemTela.innerHTML = textHtml;
}

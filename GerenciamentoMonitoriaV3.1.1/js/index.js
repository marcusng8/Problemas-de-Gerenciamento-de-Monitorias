if(localStorage.length != 0) window.location.replace("/html/initialScreen.html");


window.onload = () =>{
    btn.disabled = true;
    let validaForm = () =>{
        if(nome.value.length > 0 && senha.value.length > 0){
            btn.disabled = false;
        }else btn.disabled = true;
    };
    nome.oninput = validaForm;
    senha.oninput = validaForm;
    btn.onclick = (evento) =>{
        obtemDadosAJAX();
        evento.preventDefault();
        //var x = evento;
    }
}

function obtemDadosAJAX(){
    //executar chamada AJAX para a API do JSONSERVER
    let xhr = new XMLHttpRequest();
    xhr.onload = verificaLogin;
    xhr.open('GET', 'https://servergerenciamento.herokuapp.com/usuarios');
    xhr.send();
}

function verificaLogin(dados){
    dados = JSON.parse(this.responseText);
    let cont = 0;
    var idvalor = "";

    for(i = 0; i < dados.length; i++){
        let user = dados[i].usuario;
        let pass = dados[i].senha;
        if(nome.value == user && pass == senha.value){
            idvalor = dados[i].id;
            cont++;
        }
    }   
    if(cont > 0){
        let user = {nome:nome.value, senha:senha.value, id:idvalor};
        localStorage.setItem('user', JSON.stringify(user));
        window.location.replace("/html/initialScreen.html");
    }else alert("Usuário ou senha incorretos!");
}
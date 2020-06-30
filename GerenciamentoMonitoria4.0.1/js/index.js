if(localStorage.length != 0) {
    let x = localStorage.getItem('user');
    let dados = JSON.parse(x);
    if(dados.tipo == 2){
        window.location.replace("./initialScreen.html");
    }
    else if(dados.tipo == 1){
        window.location.replace("./initialScProf.html");
    }
}


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
    let type;
    let typeAc;

    for(i = 0; i < dados.length; i++){
        let user = dados[i].usuario;
        let pass = dados[i].senha;
        type = dados[i].tipo;
        if(nome.value == user && pass == senha.value){
            idvalor = dados[i].id;
            cont++;
            typeAc = type;
        }
    }
    console.log(typeAc)
    if(cont > 0 && typeAc == 2){
        let user = {nome:nome.value, senha:senha.value, id:idvalor, tipo:typeAc};
        localStorage.setItem('user', JSON.stringify(user));
        window.location.replace("./initialScreen.html");
    }else if(cont > 0 && typeAc == 1){
        let user = {nome:nome.value, senha:senha.value, id:idvalor, tipo:typeAc};
        localStorage.setItem('user', JSON.stringify(user));
        window.location.replace("./initialScProf.html");
    }else alert("Usuário ou senha incorretos!");
}
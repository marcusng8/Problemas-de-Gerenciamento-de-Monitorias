function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ 
                        {nome: "João da Silva", email: "hotmail.com", matricula: "2134523", aleatorio: "Lorem impsum", nota1: "5", sugestao: "Lorem do"}, 
                        {nome: "Maria das Graças", email: "@gmail.com", matricula: "2134523", aleatorio: "Lorem impsum", nota1: "4", sugestao: "Lorem do"}, 
                        {nome: "Pedro Gomes", email: "@gmail.com", matricula: "2134523", aleatorio: "Lorem impsum", nota1: "3", sugestao: "Lorem do"} 
                    
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById ('campoNome').value;
    let strEmail = document.getElementById ('campoEmail').value;
    let strMatricula = document.getElementById ('campoMatricula').value;
    let strAleatorio= document.getElementById ('aleatorio').value;
    let strNta1= document.getElementById ('nta1').value;
    let strSugestao= document.getElementById ('sugestao').value;
    let novoContato = {
        nome: strNome,
        email: strEmail,
        matricula: strMatricula,
        aleatorio: strAleatorio,
        nota1: 5,
        sugestao: strSugestao
    };
    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela//
}



function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].email} - ${objDados.contatos[i].matricula} - ${objDados.contatos[i].aleatorio} - ${objDados.contatos[i].nota1} - ${objDados.contatos[i].sugestao} </p>`
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);
document.getElementById ('ok2').addEventListener ('click', incluirContato);


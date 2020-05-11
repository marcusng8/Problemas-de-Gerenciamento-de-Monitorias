if(localStorage.length != 0) window.location.replace("http://127.0.0.1:5500/html/initialScreen.html");

window.onload = () =>{
    btn.disabled = true;
    let validaForm = () =>{
        if(nome.value.length > 0 && senha.value.length > 0){
            btn.disabled = false;
        }else btn.disabled = true;
    };
    nome.oninput = validaForm;
    senha.oninput = validaForm;
    let login = document.getElementById('login');
    btn.onclick = (evento) =>{
        if(nome.value == "rodrigo" && senha.value == "123"){
            let user = {nome:nome.value, senha:senha.value};
            localStorage.setItem('user', JSON.stringify(user));
            window.location.replace("http://127.0.0.1:5500/html/initialScreen.html");
        }else alert("O usuário ou senha estão incorretos!");
        evento.preventDefault();
    }
}


function verificar() {
    let email = document.getElementById('inputEmail').value;
    let senha = document.getElementById('inputSenha').value;

    var urlLogado = 'indexLogado.html';
    var urlErro = 'indexErro.html';
    var botao = document.getElementById('btn');

    if (email === 'cesarprogamer' && senha === 'cesarDelas') {
        logado(urlLogado);
    }
    else{
        erro(urlErro)
    }
}

function logado(url) {
    var janelaLogado = window.open(url, '_blank');
    janelaLogado.focus();
}

function erro(url) {
    var janelaErro = window.open(url, '_blank');
    janelaErro.focus();
}
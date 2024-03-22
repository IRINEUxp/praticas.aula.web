
let jogada = 'O';

let historico = new Array(9);

function clique(posicao) {
    if (historico[posicao] === '' && !verificarVencedor() && !empate()) {
        historico[posicao] = jogada;
        renderizar();
        if (!verificarVencedor() && !empate()) {
            jogada = jogada === 'X' ? 'O' : 'X';
        }
    }
}


function verificarVencedor() {
    let combinacoesPossiveis = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combinacao of combinacoesPossiveis) {
        if (historico[combinacao[0]] === historico[combinacao[1]] &&
            historico[combinacao[1]] === historico[combinacao[2]] &&
            historico[combinacao[0]] !== '') {
                alert(jogada + ' venceu!');
                return true;
        }
    }

    return false;
}

function empate() {
    if (!historico.includes('')) {
        alert('Empate');
        return true;
    }
    return false;
}

function resetarGame() {
    jogada = 'X';
    historico = ['', '', '', '', '', '', '', '', '']
    renderizar();
}

function renderizar() {
    const divs = document.querySelectorAll(".bloco p");
    for (let i = 0; i < divs.length; i++) {
        const p = divs[i];
        p.textContent = historico[i];
    }
}






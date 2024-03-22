const alunos = [];
    
function inserirAluno() {

    // const container = document.getElementById('container2');
    // const tabela = document.createElement('table');
    
    // container.appendChild(tabela);

    // const thead = document.createElement('thead');
    // tabela.appendChild(thead);

    // const tr = document.createElement('tr');
    // thead.appendChild(tr);

    // const thNome = document.createElement('th');
    // const thNota = document.createElement('th');

    // tr.appendChild(thNome);
    // tr.appendChild(thNota);

    const nomeAluno = document.getElementById("nome").value;
    const notaAluno = document.getElementById("nota").value;
    
    if (nomeAluno.trim() !== "" && notaAluno.trim() !== "") {
        const aluno = { nome: nomeAluno, nota: notaAluno };
        alunos.push(aluno);
        
        atualizarTabela();
        limparInputs();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function atualizarTabela() {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";
    
    alunos.forEach(aluno => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.nota}</td>
        `;
        corpoTabela.appendChild(tr);
    });
    
    document.getElementById("tabela").style.display = "table";
}

function limparInputs() {
    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";
}
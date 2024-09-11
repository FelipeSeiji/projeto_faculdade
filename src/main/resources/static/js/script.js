const url = "http://localhost:8080/candidato";

function mostrarCarregamento(){
    document.getElementById("loading").style.display = "none";
}

function mostrarTodos(candidatos){
    let tab = `<thead>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Partido político</th>
            <th scope="col">Descrição</th>
            <th scope="col">Histórico</th>
            <th scope="col">Escolaridade</th>
            <th scope="col">Proposta de governo</th>
            <th scope="col">Opoio político</th>
        </thead>
    `;
    for (let candidato of candidatos){
        tab += `<tr scope = "row">
                <td>${candidato.id}</td>
                <td>${candidato.nome}</td>
                <td>${candidato.idade}</td>
                <td>${candidato.partido}</td>
                <td>${candidato.descricao}</td>
                <td>${candidato.historico}</td>
                <td>${candidato.escolaridade}</td>
                <td>${candidato.propostaGoverno}</td>
                <td>${candidato.apoioPolitico}</td>
            </tr>`;
    };
    document.getElementById("candidatos").innerHTML = tab;
}

async function getAPI(url) {
    const response = await fetch(url, {method:"GET"})

    var data = await response.json()
    console.log(data)

    if (response){
        mostrarCarregamento()
        mostrarTodos(data)
    }
}

getAPI(url)
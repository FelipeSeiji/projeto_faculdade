document.addEventListener("DOMContentLoaded", () => {
  const url = "http://localhost:8080/candidato";
  const form = document.getElementById("candidateForm");
  const candidatosTBody = document.getElementById("candidatos");
  const loading = document.getElementById("loading");

  async function fetchCandidatos() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Erro ao buscar candidatos");
      const data = await response.json();
      mostrarTodos(data);
    } catch (error) {
      console.error(error);
    } finally {
      loading.style.display = "none";
    }
  }

  //Função para criar e atualizar
  async function criarOuAtualizarCandidato(candidato) {
    try {
      const id = candidato.id ? `/${candidato.id}` : "";
      const method = candidato.id ? "PUT" : "POST";
      const response = await fetch(url + id, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(candidato),
      });
      if (!response.ok) throw new Error("Erro ao salvar candidato");
      fetchCandidatos();
    } catch (error) {
      console.error(error);
    }
  }

  //Função para deletar
  async function deletarCandidato(id) {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao deletar candidato");
      fetchCandidatos();
    } catch (error) {
      console.error(error);
    }
  }

  //Função para mostrar todos os usuarios no banco de dados
  function mostrarTodos(candidatos) {
    candidatosTBody.innerHTML = "";
    candidatos.forEach((candidato) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${candidato.nome}</td>
                <td>${candidato.idade}</td>
                <td>${candidato.partido}</td>
                <td>${candidato.descricao}</td>
                <td>${candidato.historico}</td>
                <td>${candidato.escolaridade}</td>
                <td>${candidato.propostaGoverno}</td>
                <td>${candidato.apoioPolitico}</td>
                <td>
                    <button class="btn btn-danger btn-sm delete-btn" data-id="${candidato.id}">Deletar</button>
                </td>
            `;
      candidatosTBody.appendChild(row);
    });
  }

  //Função para editar
  function editarCandidato(id) {
    const row = document.querySelector(`tr[data-id='${id}']`);
    const cells = row.querySelectorAll("td");
    document.getElementById("nome").value = cells[1].innerText;
    document.getElementById("idade").value = cells[2].innerText;
    document.getElementById("partido").value = cells[3].innerText;
    document.getElementById("descricao").value = cells[4].innerText;
    document.getElementById("historico").value = cells[5].innerText;
    document.getElementById("escolaridade").value = cells[6].innerText;
    document.getElementById("propostaGoverno").value = cells[7].innerText;
    document.getElementById("apoioPolitico").value = cells[8].innerText;
  }
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const candidato = {
      nome: document.getElementById("nome").value,
      idade: document.getElementById("idade").value,
      partido: document.getElementById("partido").value,
      descricao: document.getElementById("descricao").value,
      historico: document.getElementById("historico").value,
      escolaridade: document.getElementById("escolaridade").value,
      propostaGoverno: document.getElementById("propostaGoverno").value,
      apoioPolitico: document.getElementById("apoioPolitico").value,
    };
    criarOuAtualizarCandidato(candidato);
    form.reset();
  });
  fetchCandidatos();
});
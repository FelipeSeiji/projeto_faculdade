document.addEventListener("DOMContentLoaded", () => {
  const url = "http://localhost:8080/candidato";
  const form = document.getElementById("candidateForm");
  const tabelaCandidatos = document.getElementById("tabelaCandidatos");
  const loading = document.getElementById("loading");

  async function fetchCandidatos() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar candidatos");
      }
      const data = await response.json();
      mostrarTodos(data);
    } catch (error) {
      console.error(error);
    } finally {
      loading.style.display = "none";
    }
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

  async function deletarCandidato(id) {
    try {
      const response = await fetch(url + `/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Erro ao deletar candidato");
      fetchCandidatos();
    } catch (error) {
      console.error(error);
    }
  }

  function mostrarTodos(candidatos) {
    tabelaCandidatos.innerHTML = "";
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
                    <button class="botaoExcluir" data-id="${candidato.id}">Deletar</button>
                </td>
            `;
      tabelaCandidatos.appendChild(row);
    });

    // Adicionar evento de exclusão para cada botão gerado dinamicamente
    const botoesExcluir = document.querySelectorAll(".botaoExcluir");
    botoesExcluir.forEach((botao) => {
      botao.addEventListener("click", (event) => {
        const candidatoId = event.target.getAttribute("data-id");
        deletarCandidato(candidatoId);
      });
    });
  }

  fetchCandidatos();
});

document.addEventListener("DOMContentLoaded", () => {
  const url = "http://localhost:8080/candidato"; // Certifique-se de que este é o endpoint correto
  const form = document.getElementById("candidateForm");
  const tabelaCandidatos = document.getElementById("tabelaCandidatos");
  const loading = document.getElementById("loading");

  let candidatoAtualId = null; // Variável para armazenar o ID do candidato sendo editado

  // Função para buscar todos os candidatos
  async function fetchCandidatos() {
    try {
      loading.style.display = "block"; // Mostrar spinner
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar candidatos");
      }
      const data = await response.json();
      mostrarTodos(data);
    } catch (error) {
      console.error(error);
    } finally {
      loading.style.display = "none"; // Ocultar spinner
    }
  }

  // Manipulador de submissão do formulário
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const candidato = {
      nome: document.getElementById("nome").value.trim(),
      idade: parseInt(document.getElementById("idade").value, 10),
      partido: document.getElementById("partido").value.trim(),
      descricao: document.getElementById("descricao").value.trim(),
      historico: document.getElementById("historico").value.trim(),
      escolaridade: document.getElementById("escolaridade").value.trim(),
      propostaGoverno: document.getElementById("propostaGoverno").value.trim(),
      apoioPolitico: document.getElementById("apoioPolitico").value.trim(),
    };

    if (candidatoAtualId !== null) {
      // Atualização de candidato
      candidato.id = candidatoAtualId;
      console.log("Editando candidato ID:", candidatoAtualId);
    }

    await criarOuAtualizarCandidato(candidato);
    form.reset();
    candidatoAtualId = null; // Resetando o ID após o envio
  });

  // Função para criar ou atualizar um candidato
  async function criarOuAtualizarCandidato(candidato) {
    try {
      const id = candidato.id ? `/${candidato.id}` : "";
      const method = candidato.id ? "PUT" : "POST"; // Se ID existe, usa PUT, senão usa POST
      console.log(`Enviando ${method} para o candidato com ID: ${id}`);

      loading.style.display = "block"; // Mostrar spinner durante a operação

      const response = await fetch(url + id, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(candidato),
      });

      if (!response.ok) {
        throw new Error(`Erro ao salvar candidato: ${response.statusText}`);
      }

      fetchCandidatos(); // Atualiza a lista após o sucesso
    } catch (error) {
      console.error("Erro na criação ou atualização:", error);
    } finally {
      loading.style.display = "none"; // Ocultar spinner após a operação
    }
  }

  // Função para deletar um candidato
  async function deletarCandidato(id) {
    if (!confirm("Tem certeza que deseja deletar este candidato?")) {
      return;
    }
    try {
      loading.style.display = "block"; // Mostrar spinner durante a operação
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
    } finally {
      loading.style.display = "none"; // Ocultar spinner após a operação
    }
  }

  // Função para carregar os dados no formulário para edição
  function editarCandidato(candidato) {
    document.getElementById("nome").value = candidato.nome;
    document.getElementById("idade").value = candidato.idade;
    document.getElementById("partido").value = candidato.partido;
    document.getElementById("descricao").value = candidato.descricao;
    document.getElementById("historico").value = candidato.historico;
    document.getElementById("escolaridade").value = candidato.escolaridade;
    document.getElementById("propostaGoverno").value =
      candidato.propostaGoverno;
    document.getElementById("apoioPolitico").value = candidato.apoioPolitico;

    candidatoAtualId = candidato.id; // Atribui o ID do candidato selecionado
    console.log("Candidato selecionado para edição:", candidatoAtualId);
  }

  // Função para exibir todos os candidatos na tabela
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
                    <button class="btn btn-sm btn-warning botaoEditar" data-id="${candidato.id}">Editar</button>
                    <button class="btn btn-sm btn-danger botaoExcluir" data-id="${candidato.id}">Deletar</button>
                </td>
            `;
      tabelaCandidatos.appendChild(row);
    });

    // Adicionar eventos de clique para os botões de editar e excluir
    const botoesExcluir = document.querySelectorAll(".botaoExcluir");
    botoesExcluir.forEach((botao) => {
      botao.addEventListener("click", (event) => {
        const candidatoId = event.target.getAttribute("data-id");
        deletarCandidato(candidatoId);
      });
    });

    const botoesEditar = document.querySelectorAll(".botaoEditar");
    botoesEditar.forEach((botao) => {
      botao.addEventListener("click", (event) => {
        const candidatoId = event.target.getAttribute("data-id");
        const candidato = candidatos.find((cand) => cand.id == candidatoId); // Encontrar o candidato pelo ID
        if (candidato) {
          editarCandidato(candidato);
        } else {
          console.error("Candidato não encontrado para edição");
        }
      });
    });
  }

  // Inicializar a aplicação buscando os candidatos
  fetchCandidatos();
});

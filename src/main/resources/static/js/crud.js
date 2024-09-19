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
async function deletarCandidato(candidato) {
  try {
    const id = candidato.id ? `/${candidato.id}` : "";
    const method = "DELETE";
    const response = await fetch(url + id, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidato),
    });
    if (!response.ok) throw new Error("Erro ao deletar candidato");
    fetchCandidatos();
  } catch (error) {
    console.error(error);
  }
}
 function editarCandidato(candidato) {
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
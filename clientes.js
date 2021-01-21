fetch('http://localhost:4000/clientes')
.then( resposta => {
  return resposta.jason()
})
.then( jason => {
  return json
})
const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {
  const linha = document.createElement("tr");
  const conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  `;

  linha.innerHTML = conteudoLinha;
  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

informacoesClientes.forEach(indice => {
  corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})



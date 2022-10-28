
// para carregar o ultimo item digitado dentro do h1
onload = function(){
  let nome = localStorage.getItem("nome");
  let h1 = document.getElementById("nome");
  h1.innerHTML = nome;
}
// função para fazer persistir os dados mesmo que fecha o navegador
function atualizar(recebendoInput) {

  let valor = recebendoInput.value;
  console.log(valor);

  let h1 = document.getElementById("nome");
  h1.innerHTML = valor;
  localStorage.setItem("nome", valor);
}

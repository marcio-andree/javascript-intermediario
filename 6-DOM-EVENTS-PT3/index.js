// function lido(elemento) {
//   let texto = document.getElementById("titulo");
//   texto.innerHTML = "outro titulo";

// }

// outra forma de fazer
function lido() {
  let texto = document.getElementById("titulo");
  texto.onclick = mudarTexto;

}

function mudarTexto(){
  this.innerText = "funcionou"
}

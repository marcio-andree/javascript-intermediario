function mudarCor(){
let h = document.getElementsByTagName("h1")[0];
h.style.color = "blue";

}


function mudarTexto(){
  let h= document.getElementsByTagName("h1")[0]
  h.innerHTML = "novo Titulo"
  // primeiro parametro é uma função , segundo parametro é o tempo em milisegundos
  setTimeout(mudarCor, 3000)
}



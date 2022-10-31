var numero = 1;
var interval;


function atualizarTexto(){
  let h = document.getElementsByTagName("h1")[0];
  h.innerHTML += " " + numero;
  numero++;
}

function iniciar(){
  interval = setInterval(atualizarTexto, 1000);

}

function parar(){
  clearInterval(interval);

}



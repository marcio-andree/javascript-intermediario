
function lido() {
  let texto = document.getElementById("titulo");
  texto.addEventListener("mouseover", mouseSobre);
  texto.addEventListener("mouseout", mouseFora);
}

function mouseSobre(){
  this.innerHTML = "<h1> BEM-VINDO </h1>";
}

function mouseFora(){
  this.innerText = "TITULO PRINCIPAL";
}

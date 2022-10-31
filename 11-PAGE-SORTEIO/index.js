let pessoas = ["Pedro", "Arrasca", "Gabi","Everton R.",
              "joão gomes", "Thiago maia","felipe luiz",
              "Rodnei", "Leo Pereira", "Davi Luiz", "Santos"
              ]


function sortear() {
 let numeroPessoas  = pessoas.length;
 let numSorte = Math.floor(Math.random() * numeroPessoas);
 document.getElementById("display").innerHTML =  pessoas[numSorte];
}

// Outra forma de fazer

// function sortear() {
//   let numeroPessoas = 100;
//   let numSorte = Math.round(Math.random() * numeroPessoas);
//   document.getElementById("display").innerHTML = numSorte;

// }


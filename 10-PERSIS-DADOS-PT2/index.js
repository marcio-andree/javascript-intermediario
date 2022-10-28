// let estudante = {nome: "Juba", nota1: 8.0}
// localStorage.setItem("aluno", JSON.stringify(estudante));
// console.log(estudante);

let a = localStorage.getItem("aluno");
console.log(JSON.parse(a));


// localStorage.clear(); apagar os dados da memoria do navegador

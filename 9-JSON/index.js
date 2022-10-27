let aluno1 = {nome: "Pedro", nota: 9.5};
let aluno2 = '{"nome":"João", "nota":8.5}';


//


// // stringify transforma Objeto Json em string
let aluno1Json = JSON.stringify(aluno1);
console.log(aluno1);
console.log(aluno1Json);



// parse transforma uma  string em objeto Json
let aluno2String = JSON.parse(aluno2);
console.log(aluno2);
console.log(aluno2String);



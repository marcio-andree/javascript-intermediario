// function changeH1() {
//   let input = document.getElementById("texto");
//   let h1 = document.getElementsByTagName("h1")[0];
//   h1.innerText = input.value;
// }

// outra forma com this

function changeH1(input) {
   let h1 = document.getElementsByTagName("h1")[0];
  h1.innerText = input.value;
}

// função escolha time

function escolha() {
  let times = document.getElementById("mySelect").value;
  let demo = document.getElementById("demo");
  demo.innerHTML = "Times do coração: " + times; // <--> document.getElementById("demo").innerHTML = "Time do coração: " + times;
}


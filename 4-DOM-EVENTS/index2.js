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


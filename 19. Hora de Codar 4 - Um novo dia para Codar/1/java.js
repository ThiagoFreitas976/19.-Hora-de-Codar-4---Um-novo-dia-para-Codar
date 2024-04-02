var estudantes = [];
function cadastrarEstudante() {
  var nome = prompt("Digite o nome do estudante ou (PARE) para terminar o programa");
  if (nome === "PARE") {
    cadastro(); 
  } 

  else {
    estudantes.push(nome); 
    cadastrarEstudante(); 
  }
}

function cadastro() {
  
  console.log("Quantidade de estudantes cadastrados: " + estudantes.length);
  console.log("Lista de estudantes cadastrados:");
  for (var i = 0; i < estudantes.length; i++) {
    console.log((i + 1) + ". " + estudantes[i]); // essa parte eu não entendi...
}
}

cadastrarEstudante(); 
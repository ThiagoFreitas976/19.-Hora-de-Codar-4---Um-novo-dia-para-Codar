var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];

var planetaUsuario = prompt("Digite o nome de um planeta:");

var encontrado = planetas.includes(planetaUsuario); //includes verifica se o valor informado pelo usuario consta no array 

if (encontrado == true) {
    console.log("Sim, o planeta " + planetaUsuario + " está na lista de planetas.");
} else {
    console.log("Não, o planeta " + planetaUsuario + " não está na lista de planetas.");
}

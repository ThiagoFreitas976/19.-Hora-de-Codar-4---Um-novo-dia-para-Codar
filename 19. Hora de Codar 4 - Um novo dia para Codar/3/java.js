var frutas = ["Banana", "Maça", "Pera", "Abacate", "Uva", "Manga"];
function removerFruta() {
   
var listaDeFrutas = "Lista de frutas: " + frutas.join(", ");
 var frutausuario = prompt(listaDeFrutas + " Digite uma das frutas para ser removida:");

   
var indiceFruta = frutas.indexOf(frutausuario);
    if (indiceFruta !== -1) {
       
        frutas.splice(indiceFruta, 1);
        console.log("Fruta foi retirada da lista.");

        if (frutas.length > 0) {
            removerFruta(); 
        } else {
            console.log("Lista de compras finalizada."); 
        }
    } else {
        console.log("Fruta indisponível no mercado."); 
        removerFruta(); 
    }
}

removerFruta(); 

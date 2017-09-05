let variableScope: string = "bloup";
const variableConstante: string = "blip";

if(true){
    let variableScope = "blip";
    console.log(variableScope);
}
console.log(variableScope);
let monTableau: string[] = [];
monTableau.filter(function(valeur){
    return valeur == "bloup";
});
monTableau.filter((valeur) => valeur ==="bloup");
//syntaxe d'import de module
import{MaClasse}from'./ma-classe' 

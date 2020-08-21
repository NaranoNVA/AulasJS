//let altura = prompt("Digite sua altura");
//let peso = prompt("Digite seu peso");

//let imc = peso / (altura**2);
//console.log("IMC: "+imc);

function calcularimc(altura, peso){
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    let imc = peso / (altura**2);

    alert("Seu IMC é de: "+imc);
    alert

}


/* Correção 
let altura = prompt("Digite sua altura").replace(",", "."); //Replace para substituir , por .
let peso = prompt("Digite seu peso").replace(",",".");

let imc = peso / (altura*altura);
let imc = peso / altura**2;
let imc = peso / Math.pow(altura, 2); //Biblioteca de matematica

let isGrupoDeRisco = 30 >=30; //Usar "is" para variaveis de true e false
alert("Você está no grupo de risco? ("+isgrupoDeRisco+")"); 
*/
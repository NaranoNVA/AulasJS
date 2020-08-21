//let altura = prompt("Digite sua altura");
//let peso = prompt("Digite seu peso");

//let imc = peso / (altura**2);
//console.log("IMC: "+imc);

function calcularimc(altura, peso){
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    let imc = peso / (altura**2);

    alert("Seu IMC é de: "+imc);

}
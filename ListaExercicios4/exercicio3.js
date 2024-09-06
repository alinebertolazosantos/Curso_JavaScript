// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
// tela o texto:
// a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
// Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

function celsiusToFarenheit(grausCeusius) {
    const temperaturaFarenheit = (9 / 5) * grausCeusius + 32;

    console.log(
        'A temperatura correspondente em Farenheit é de ' + temperaturaFarenheit
    );
}

console.log(celsiusToFarenheit(32));

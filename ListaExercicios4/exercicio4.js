// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
// que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
// maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
// etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
// é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
// etiqueta e registre na tela a frase:

// O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).

function produtoAcrescimo(precoPrateleira) {
    const precoReal = precoPrateleira * 1.08875;

    console.log('O valor a ser pago é: ' + precoReal);
}

console.log(produtoAcrescimo(10));

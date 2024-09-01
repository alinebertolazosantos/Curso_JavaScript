// Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um
// produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto
// é R$ 300,00.
// Exemplo de Saída: “Preço com desconto: R$ 250” e “Está dentro do orçamento? True”

let orcamentoOriginal = 250;
let desconto = 50;
let precoProduto = 300;
let precoDesconto = 0;

let dentroOrcamento = false;

if (precoProduto - desconto <= orcamentoOriginal) {
    dentroOrcamento = true;
    precoDesconto = precoProduto - desconto;
}

console.log('Preco com desconto: R$ ' + precoDesconto);
console.log('Está dentro do orçamento? ' + dentroOrcamento);

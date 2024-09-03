// Exercício 3: Manipulação de Objetos - parte 1
// a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
// b. Acesse e imprima o nome do produto.
// c. Modifique o preço do produto e imprima o objeto atualizado.

let produto = {
    nome: 'Sabonete',
    preco: 3.99,
    quantidade: 4,
};

console.log(produto);

console.log(produto.nome);

produto.preco = 4.99;

console.log(produto);

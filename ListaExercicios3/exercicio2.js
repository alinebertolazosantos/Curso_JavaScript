// Exercício 2: Manipulação de Array - parte 2
// a. Crie um array chamado clientes contendo três nomes de clientes.
// b. Adicione um quarto cliente ao array.
// c. Remova o último cliente e imprima o array atualizado.

let clientes = ['Aline', 'André', 'Isadora'];

console.log(clientes);

clientes[3] = 'Giovana';

console.log(clientes);

clientes.length = clientes.length - 1;

console.log(clientes);

// Exercício 5: Manipulação dos Tipos Referências
// a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
// b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
// c. Crie um objeto funcionario e atribua seus valores para um novo objeto
// novoFuncionario.
// d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
// alterado.

let estoque = [10, 20, 30, 40, 50];

let novoEstoque = [...estoque];

console.log(estoque);

novoEstoque[1] = 30;

console.log('estoque ' + estoque);
console.log('novo estoque ' + novoEstoque);

let funcionario = {
    nome: 'Aline',
    idade: 22,
    cargo: 'Estágiaria',
};

let novoFuncionario = { ...funcionario };

console.log(funcionario);
console.log(novoFuncionario);

novoFuncionario.cargo = 'Analista de Produtos';

console.log('Antigo cargo ' + funcionario.cargo);
console.log('Novo cargo ' + novoFuncionario.cargo);

console.log(funcionario);
console.log(novoFuncionario);

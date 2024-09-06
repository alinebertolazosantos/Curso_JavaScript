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

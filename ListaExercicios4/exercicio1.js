// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
// término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
// cálculo)

function mediaAluno(nota1, nota2, nota3) {
    const mediaFinal = (nota1 + nota2 + nota3) / 3;

    return mediaFinal;
}

const media = mediaAluno(10, 5, 5);

console.log('A média desse aluno é: ' + media);

// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
// de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
// primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:
// média_final = (média_antes_da_pf + pf)/2

function mediaAluno(nota1, nota2, nota3) {
    const mediaFinal = (nota1 + nota2 + nota3) / 3;

    return mediaFinal;
}

const mediaAntesProva = mediaAluno(10, 10, 5);

console.log('A média desse aluno é ' + mediaAntesProva);

function mediaRecuperacao(mediaAntesProva, notaDaProva) {
    const mediaFinal = (mediaAntesProva + notaDaProva) / 2;

    return mediaFinal;
}

const notaFinal = mediaRecuperacao(mediaAntesProva, 5);

console.log('A média final desse aluno é ' + notaFinal);


const alunos = [
    {
        nome: 'Bernardo Mallet',
        nota: 7
    },
    {
        nome: 'Isabella Mattos',
        nota: 8
    },
    {
        nome: 'Angela Mattos',
        nota: 5
    },
    {
        nome: 'Igor Mattos',
        nota: 4
    }
]

const alunosAprovados = alunos.filter(function(item) {
    return item.nota >= 6;
})

console.log(alunosAprovados);
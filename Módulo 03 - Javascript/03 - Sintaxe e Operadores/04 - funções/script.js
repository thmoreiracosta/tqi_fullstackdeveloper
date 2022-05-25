// ATIVIDADE 01

const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Sophia',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '1B'
  },
  {
    nome: 'Thiago',
    nota: 3,
    turma: '2C'
  }
]

function alunosAprovados(arr, median) {
  let aprovados = []

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i]

    if (nota >= median) {
      aprovados.push(nome)
    }
  }

  return aprovados
}

console.log(alunosAprovados(alunos, 5))




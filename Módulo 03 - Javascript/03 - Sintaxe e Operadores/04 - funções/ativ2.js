//ATIVIDADE 02
function calculaIdade(age) {
  return `Daqui a ${age} anos, ${this.nome} terá ${
    this.age + age
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Maria',
  age: 30
}

const pessoa2 = {
  nome: 'Carla',
  age: 25
}

const animal = {
  nome: 'bobito',
  age: 5
}

console.log(calculaIdade.call(pessoa2, 30))

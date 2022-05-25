//ATIVIDADE

// Crie uma função que recebe dois números como parâmetros
// Confira se os números são iguais
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/ são iguais. Sua soma é maior/menor que 10 e maior/ menor que 20.

//Exemplo:

//input: 1, 2
//Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

let iguais, soma, compara10, compara20, frase1, frase2, res10, res20

function comparaNum(num1, num2) {
  frase1 = primeiraFrase(num1, num2)
  frase2 = segundaFrase(num1, num2)

  return `${frase1} ${frase2}`
}

function primeiraFrase(num1, num2) {
  iguais = ''

  if (num1 !== num2) {
    iguais = 'não'
  }

  return `Os números ${num1} e ${num2} ${iguais} são iguais.`
}

function segundaFrase(num1, num2) {
  soma = num1 + num2
  compara10 = soma > 10
  compara20 = soma > 20
  res10 = 'menor que'
  res20 = 'menor que'

  if (compara10) {
    res10 = 'maior que'
  } else {
    res10 = 'igual a'
  }

  if (compara20) {
    res20 = 'maior que'
  } else {
    res20 = 'igual a'
  }

  return `Sua soma é ${soma}, que é ${res10} 10 e ${res20} 20.`
}

console.log(comparaNum(5, 15))

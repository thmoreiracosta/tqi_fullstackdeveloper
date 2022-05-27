// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split('\n')

var numberOfMatches = parseInt(lines.shift)

let n = parseInt(lines.shift())
let totalMatches = 0
while (n > 1) {
  if (n % 2 == 0) {
    numberOfMatches = n / 2
    n = n / 2
    totalMatches += numberOfMatches
  } else {
    numberOfMatches = (n - 1) / 2
    n = (n - 1) / 2 + 1
    totalMatches += numberOfMatches
  }
}

print(totalMatches)

//Escreva o seu código nos espaços em branco

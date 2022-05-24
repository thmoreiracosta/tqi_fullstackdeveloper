let n1, n2, result

function calculadora() {
  const operacion = Number(
    prompt(
      'Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 -Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'
    )
  )

  if (!operacion || operacion < 0 || operacion >= 7) {
    alert('Erro - Operação Inválida, tente novamente!')
    calculadora()
  } else {
    n1 = Number(prompt('Entre com o primeiro número: '))
    n2 = Number(prompt('Entre com o segundo número: '))

    if (!n1 || !n2) {
      alert('Erro - parâmetros inválidos, reveja suas opções.')
      calculadora()
    } else {
      function soma() {
        result = n1 + n2
        alert('O valor da soma foi de : ' + result)
      }
      function subtracao() {
        result = n1 - n2
        alert('O valor da subtração foi de : ' + result)
      }
      function multipicacao() {
        result = n1 * n2
        alert('O valor da multiplicação foi de : ' + result)
      }
      function divReal() {
        result = n1 / n2
        alert(`A divisão entre ${n1} e ${n2} foi de ${result}`)
      }
      function divInteira() {
        result = n1 % n2
        alert(`O resto da divisão entre ${n1} e ${n2} foi de ${result}`)
      }
      function potencia() {
        result = n1 ** n2
        alert(`${n1} elevado a ${n2} é igual a ${result}`)
      }

      function novaOperação() {
        let opcao = Number(
          prompt('Deseja fazer outra operação?\n 1 - Sim \n 2 - Não')
        )

        if (opcao == 1) {
          calculadora()
        } else if (opcao == 2) {
          alert('Obrigado por usar nossa calculadora. Até mais!')
        } else {
          alert('Opção inválida!')
          novaOperação()
        }
      }
    }

    switch (operacion) {
      case 1:
        soma()
        novaOperação()
        break
      case 2:
        subtracao()
        novaOperação()
        break
      case 3:
        multipicacao()
        novaOperação()
        break
      case 4:
        divReal()
        novaOperação()
        break
      case 5:
        divInteira()
        novaOperação()
        break
      case 6:
        potencia()
        novaOperação()
        break
      // default:
      //   alert('Opção inválida!')
      //   calculadora()
    }
  }
}

calculadora()

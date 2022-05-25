//ATIVIDADE 01

// solução 01
// function verificaPalindromo(string) {
//   if (!string) {
//     return 'string inexistente'
//   }
//   return string.split('').reverse().join('') === string
// }

//solução 02
// function verificaPalindromo(string) {
//   if (!string) {
//     return 'string inexistente'
//   }
//   for (let i = 0; i < string.length / 2; i++) {
//     if (string[i] !== string[string.length - 1 - i]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(verificaPalindromo('gato'))

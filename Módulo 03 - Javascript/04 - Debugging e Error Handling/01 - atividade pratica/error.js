function validaArray(arr, num) {
  try {
    if (!arr && !num) {
      throw ReferenceError('Envie os parâmetros')
    } else if (typeof arr !== 'object') {
      throw TypeError('Array precisa ser do tipo number')
    } else if (arr.length !== num) {
      throw RangeError('Tamanho inválido!')
    } else {
      return arr
    }
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro é ReferenceError')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este erro é TypeError')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Este erro é RangeError')
      console.log(e.message)
    } else {
      console.log('Este erro não era esperado: ' + e)
    }
  }
}

console.log(validaArray('a'))

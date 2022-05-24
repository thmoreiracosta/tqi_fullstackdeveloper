// vetores e arrays

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]

// console.log(array[3])
// array.forEach(function (item, index) {
//   console.log(item, index)
// })

// array.push('novo item')

// array.pop()

// array.shift()

// array.unshift('novo item')

// console.log(array.indexOf(true))

// array.splice(0, 3)
// console.log(array)

// let novoArray = array.slice(0, 3);
// console.log(novoArray)

let object = {
  string: 'string',
  number: 1,
  boolean: false,
  array: ['array'],
  objectInterno: {
    objectInterno: 'objeto interno'
  }
}

// console.log(object.objectInterno)

// let string = object.string
// console.log(string)

// let arrayInterno = object.array
// console.log(arrayInterno)

let { string, boolean, objectInterno } = object
console.log(string, boolean,  objectInterno)

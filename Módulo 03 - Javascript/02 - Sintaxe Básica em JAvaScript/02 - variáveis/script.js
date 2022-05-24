//Tipos primitivos

//booleanos
var a = true
console.log(typeof a)

//number
let b = 1
console.log(typeof b)

//string
let c = 'Olá mundo!'
console.log(typeof c)

//array
let d = [1, 2, 3, 4, 5]
console.log(typeof d)

let escopoGlobal = 'global'
console.log(escopoGlobal)

function escopoLocal() {
  let escopoLocalInterno = 'local'
  console.log(escopoLocalInterno)
}

escopoLocal()

//atribuição
let atrb = 'chico'

//comparação
let comp = '0' == 0
console.log(comp)

//comp identified
let cop = '0' === 0
console.log(cop)

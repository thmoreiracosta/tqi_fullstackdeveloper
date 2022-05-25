class contaCorrente extends contaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero)
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

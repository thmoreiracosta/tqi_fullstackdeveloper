class contaUniversitaria extends contaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'universitária'
  }

  sacar(valor) {
    if (valor > 500) {
      return 'Seu saldo é insuficiente! Confira seu extrato.'
    }

    this._saldo = this._saldo - valor
  }
}

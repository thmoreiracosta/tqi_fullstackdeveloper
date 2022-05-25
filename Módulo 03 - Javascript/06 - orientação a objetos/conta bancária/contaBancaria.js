class contaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0
  }

  get saldo() {
    return this._saldo
  }

  set saldo(valor) {
    this._saldo = valor
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return 'Seu saldo é insuficiente! Confira seu extrato.'
    }
    this._saldo = this._saldo - valor
    return this._saldo
  }

  depositar(valor) {
    this._saldo = this._saldo + valor

    return this._saldo
  }
}

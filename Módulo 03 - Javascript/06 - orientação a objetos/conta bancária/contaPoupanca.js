class contaPoupanca extends contaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'poupança'
  }
}

// //1
// class Pessoa {
//   constructor(nome, idade){
//   this.nome = nome;
//   this.idade = idade;
// }

//   apresentar() {
//     console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//   }
// }

// let pessoa1 = new Pessoa('Maria', 20);
// pessoa1.apresentar();
// let pessoa2 = new Pessoa('Jorge', 16);
// pessoa2.apresentar();

//2

class contaBancaria {
  constructor(titular, saldo){
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor){
    console.log(`Seu saldo agora é ${this.saldo + valor}.`)
  }

  sacar(valor){
    console.log(console.log(`Seu saldo agora é ${this.saldo - valor}.`))
  }

  mostrarSaldo(){
    console.log(`Titular: ${this.titular}\nSaldo: ${this.saldo}`)
  }
}

let contaBancaria = new contaBancaria();
contaBancaria.mostrarSaldo(500);
contaBancaria.sacar(300)
contaBancaria.depositar(800)
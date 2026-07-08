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

// //2

// class contaBancaria {
//   constructor(titular){
//     this.titular = titular;
//     this.saldo = 2000;
//   }

//   depositar(valor){
//     if(valor > 1){
//     console.log(`Seu saldo agora é ${this.saldo + valor}.`)
//     this.saldo = this.saldo + valor
//     } else {
//       console.log('O valor mínimo de depósito é 1 real.')
//     }
//   }

//   sacar(valor){
//     if(valor < this.saldo){
//     console.log(`Seu saldo agora é ${this.saldo - valor}.`);
//     this.saldo = this.saldo - valor
//     } else {
//       console.log('Valor maior que o permitido.')
//     }
//   }

//   mostrarSaldo(){
//     console.log(`Titular: ${this.titular}\nSaldo: ${this.saldo}`)
//   }
// }

// let contaBancariaAndre = new contaBancaria('André');
// contaBancariaAndre.mostrarSaldo();
// contaBancariaAndre.sacar(300);
// contaBancariaAndre.depositar(800);
// contaBancariaAndre.mostrarSaldo();

//3
class Produto {
  constructor(nome, preco){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = 50;
  }

  adicionarEstoque(qtd){
    if(qtd >=1 & Number.isInteger(qtd)){
      console.log(`Seu estoque agora é de ${this.quantidade + qtd}.`)
      this.quantidade = this.quantidade + qtd
    } else {
      console.log('Informe uma quantidade real.')
    }
  }

  
}
class Pessoa {
  nome = 'Maria';
  idade = 20;

  apresentar() {
    console.log(`Olá! Meu nome é ${nome} e tenho ${idade} anos.`);
  }
}
let pessoa1 = new Pessoa();
pessoa1.apresentar();

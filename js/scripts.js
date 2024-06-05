//
// var, let, const
//
var x = 10;
var y = 20;

console.log(`valor inicial de x com var: ${x}`);

if (y > 10) {
  x = 5;
  console.log(`novo valor de x dentro do IF ${x}`);
}
console.log(`x fora do IF ${x}`);

let z = 30;
console.log(`valor inicial de z com let: ${z}`);
if (y > 10) {
  let z = 5;
  console.log(`novo valor de z dentro do IF ${z}`);
}
console.log(`z fora do IF ${z}`);

function xyz() {
  const n = "André";
  console.log(`novo valor de n dentro da função ${n}`);
}

const n = "Luiz";
xyz();
console.log(`n fora da função ${n}`);

//
// arrow function
//
const soma = function (a, b) {
  return a + b;
};

const somaArrow = (a, b) => a + b;

console.log(soma(5, 5));
console.log(somaArrow(5, 5));

const saudacao = (nome) => {
  if (nome) {
    return `Olá ${nome}`;
  } else {
    return "Sem nome";
  }
};

console.log(saudacao("André"));
console.log(saudacao());

// a grande diferença da função normal e que o this é o escopo anterior, já na arrow é o escopo atual

const cliente = {
  nome: "André",
  nomeCliente() {
    setTimeout(function () {
      console.log(this);
      console.log(`Função normal, nome do cliente: ${this.nome}`);
    }, 1000);
  },
  nomeClienteArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Função arrow, nome do cliente: ${this.nome}`);
    }, 2000);
  },
};

cliente.nomeCliente();
cliente.nomeClienteArrow();

//
//  filter
//
const array = [1, 2, 3, 4, 5, 6];
console.log(array);
const numeroFlag = array.filter((n) => {
  if (n > 3) return n;
});

console.log(numeroFlag);
console.log(array);

const usuarios = [
  { nome: "André", disponibilidade: true },
  { nome: "Luiz", disponibilidade: false },
  { nome: "Baptista", disponibilidade: true },
  { nome: "Jack", disponibilidade: false },
];

console.log(usuarios);
const disponivel = usuarios.filter((indice) => indice.disponibilidade);

console.log(disponivel);
console.log(usuarios);

//
// map  !!!!! ALTERA o elemento original !!!
//
const produtos = [
  { nome: "Camisa", preco: 80.2, categoria: "Roupas" },
  { nome: "Ferro de passar", preco: 80.2, categoria: "Eletro" },
  { nome: "Mouse", preco: 80.2, categoria: "Informática" },
  { nome: "Calça Jeans", preco: 80.2, categoria: "Roupas" },
];
console.log(produtos);

produtos.map((itens) => {
  if (itens.categoria === "Roupas") {
    itens.promocao = true;
  }
});

console.log(produtos);

//
// template literals
//
const num1 = 10;
const num2 = 20;

console.log(`O número ${num1} é menor que o número ${num2}.`);

//
// destructuring
//
const cores = ["Azul", "Amarelo", "Verde", "Vermelho"];

const [tom1, tom2, tom3, tom4, tom5] = cores;

console.log(tom1, tom2, tom3, tom4, tom5);

const inventario = {
  item: "Cadeira",
  preco: 200.3,
  cor: "Amarelo",
  fabricante: "xpto",
};

const { item: movel, preco, cor, fabricante, loja } = inventario;

console.log(movel, preco, cor, fabricante, loja);

//
//  spread operator
//
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);
const a4 = [0, ...a3, 7];
console.log(a4);

const carName = { modelo: "Fastback" };
const carBrand = { marca: "Fiat" };
const carInfo = { cor: "Preto", motor: 1.0 };

const carro = { ...carName, ...carBrand, ...carInfo };
console.log(carro);

//
// classes
//
class colecaoVerao {
  constructor(item, preco, desconto) {
    this.item = item;
    this.preco = preco;
    this.desconto = desconto;}

    aplicarDesconto(percentual) {
      if (this.desconto) {
        return this.preco * ((100 - percentual) / 100);
      } else {
        return "Sem desconto";
      }
    }
  
}

const camisa = new colecaoVerao("Camiseta praia", 900, true);
const bermuda = new colecaoVerao("Bermuda xadrez", 1900, false);
console.log(camisa);
console.log(bermuda);
console.log(colecaoVerao);
console.log(camisa.aplicarDesconto(15))
console.log(bermuda.aplicarDesconto(15))

// 
// herança
// 
class novosItens extends colecaoVerao {
  constructor(item,preco,desconto,cores) {
    super(item,preco,desconto);
    this.cores=cores;
  }
  showCores() {
    console.log("As cores são:");
    this.cores.forEach((opcao) => {
      console.log(opcao);
    });
  }
}

const chapeu = new novosItens("Chapeu", 80, false, ["Azul","Verde","Preto"]);

console.log (chapeu)
chapeu.showCores();
// camisa.showCores();   da erro !!!!
console.log(chapeu.aplicarDesconto(5))
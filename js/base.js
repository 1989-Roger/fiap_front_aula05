// chamar o console
console.log("Olá sou o console");
console.log("Olá sou o console");

/* variáveis - Linguagem não tipada
forma antiga de declaração de variável - não usar
var user = "Roger Mathias";

Formas utilizadas
let,const - usar para as variáveis

let user = "Roger Mathias";
let user = "Roger Mathias";
let email = "roger.mathias@outlook.com";
let age = 32;
let login = false;
console.log(user,email,age,login);



*/
let user = "Roger Mathias";
let email = "roger.mathias@outlook.com";
let age = 32;
let login = false;
console.log(user,email,age,login);

// ver o tipo atribuido
console.log(typeof user , user);
console.log(typeof email , email);
console.log(typeof age , age);
console.log(typeof (login) , login);
console.log("-------------------------------------");

console.log(age);
age = true;
console.log(age);
console.log(typeof age , age);

 /* concatenação - evitar 
 console.log("Nome: "+user + "email: " + email  );
 cria-se template string
 iniciar e terminar com o sinal de crase ``
dentro delas vc escreve o que quiser e chama as variáveis $ método
*/
console.log(`Usuário: ${user} - email ${email}`);

let primeiroNumero = 30;
let segundoNumero = 90;
console.log(`${primeiroNumero} + ${segundoNumero} = ${primeiroNumero + segundoNumero}`);

segundoNumero = '30';
// ===  mesmo valor e mesmo tipo
// == compara se valores são iguais independente do tipo
console.log(primeiroNumero === segundoNumero);
console.log(`${primeiroNumero} + ${segundoNumero} = ${primeiroNumero + segundoNumero}`);
console.log("----------------------------------------");
// const - constante nunca se altere
const dataNascimento = '15/08';
console.log(dataNascimento);

// arrays

const coisas = ["Eu", "Tu", 123456, true, "Nós",9876,456.90,false];
console.log(coisas);
console.table(coisas);

// inserir no fim do array um valor
coisas.push("Mais 1 com push");
console.log(coisas);
// remover ultimo elemento do array
coisas.pop();
console.log(coisas);

// inserir no inicio do array
coisas.unshift("Ele");
console.log(coisas);
// retirar o primeiro elemento do array
coisas.shift();
console.log(coisas);
//removendo 2 elementos a partir de 1 determinado indice
// começa a retirar a partir do ponto de inicio
coisas.splice(3,2);
console.log(coisas);

// inserir elementos a partir de qualquer posição do array
coisas.splice(2,0,"Teste splice","splice2");
console.log(coisas);


















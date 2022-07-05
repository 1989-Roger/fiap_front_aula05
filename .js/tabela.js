/* pegar os elementos da página tabela

pegar
pela tag  = forma antiga

*/
const getTag1 = document.getElementsByTagName("td");
console.log(getTag1);
console.log(getTag1[0].textContent);
getTag1[4].textContent = "R2D2"


// pegar pela tag - jeito novo 
// query selector pega apenas o 1o
//querySelectoAll - trás todos os nós

const getTag2 = document.querySelectorAll("td");
console.log(getTag2);

// pegar pela class 
const getClass1 = document.getElementsByClassName("personagens");
console.log(getClass1);
// colocar . em classe
const getClass2 = document.querySelectorAll(".personagens")
console.log(getClass2);

// pegar pelo id 
const getId1 = document.getElementById("starWars");
console.log(getId1);
// # = elemento de id
const getId2 = document.querySelector("#starWars")
console.log(getId2);




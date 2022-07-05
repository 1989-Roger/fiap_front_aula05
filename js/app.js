/* 
pegando o tbody do html , pois será nele que os dados sderão armazenados assim que o botão confirmar for pressionado
*/
const tbody = document.querySelector("tbody");
/*
pegar o form
pegar o evento padrão do formulário (submit) 
cancelar o evento e execute uma função que grave as informações em uma tabela no tbody
*/

// escutador de eventos disparados
// forma mais simples de criar uma função
document.querySelector("form").addEventListener("submit", function (e) {
    // cancelar o evento padrão - nesse caso o submit
    e.preventDefault();
    // alert("oiiii"); explode janela do navegador
    //recuperar os campos do formulário
    // criar um array para passar os campos
    const campos = [
        document.querySelector("#usuario"),
        document.querySelector("#email"),
        document.querySelector("#dataCadastro"),
        document.querySelector("#tipoConta")
    ];
    // console.log(campos);
    // criar uma tr para vincular essa tr ao tbody 
    // cada campo será vinculado a essa tr através de uma td
    //createElement - cria qualquer elemento html
    const tr = document.createElement("tr");
    // for each que irá percorrer o array e para cada ocorrência do array ele cria uma td e vincula a td a tr
    campos.forEach((campo) => {
        // criar uma td
        const td = document.createElement("td");
        // atribuir os valores dos campos ao conteudo de texto da td
        td.textContent = campo.value;
        //td.innerHTML - outro modo do textContent porém consegue escrever dentro do html
        //vincular a td criada a tr
        tr.appendChild(td);
    })
    // vincular a tr ao tbody
    tbody.appendChild(tr);
    //limpar os dados já digitados
    this.reset();
});
const modulos = require("./modulos");



//A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de objetos)

console.log(modulos.contas);



//Também nos pedem a criação de um objeto literal chamado banco que terá
//uma propriedade chamada clientes, ele será composto pela lista de objetos
//gerados no ponto anterior.

let banco = {
    clientes: modulos.contas
}

console.log(banco)



//o objeto do banco criará um método chamado consultarCliente que receberá um
//nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao
//objeto do cliente que corresponde a esse nome inserido


function consultarClientes(nome){
   return nome.titular === 'Jarret Lafuente'
}

consultarClientes('Jarret Lafuente')
console.log(modulos.contas.find(consultarClientes));



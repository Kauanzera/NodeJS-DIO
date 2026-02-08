//Funções com Parâmetros

function torrar(pao, valor, nome = "Kauan"){    //Boa prática: colocar o parâmetro com valor 'undefined' no final da lista de parâmetros
    console.log("Torrada feita com " + pao);
    console.log("Ele é um pedido de " + nome);
    console.log("O valor total é R$" + valor)
}

torrar("Pão integral", 10.90, "Felipe");
console.log();
torrar("Pão na chapa", 11.50);
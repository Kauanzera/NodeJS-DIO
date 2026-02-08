let fatura = {
    nome: "Kauan",
    idade: 22,
    produtos: {
        0: ["Mouse", 150],
        1: ["Teclado", 200],    
        2: ["Monitor", 1200]
    }
}

gerarFatura(fatura);

function gerarFatura(fat){
    console.log(`O nome do cliente é ${fat.nome}`);
    console.log(`A idade do cliente é ${fat.idade}`);
    console.log("-----------------");

    for (let i in fat.produtos){
        // Desestruturação, onde nomeProduto recebe o valor do índice 0 e produtoPreco recebe o valor do índice 1
        let [nomeProduto , produtoPreco] = fat.produtos[i]; 
        console.log(`- ${nomeProduto} R$${produtoPreco}`);
        // console.log(`- ${fat.produtos[i][0]} R$ ${fat.produtos[i][1]}`); -> Mesmo resultado
    }
}
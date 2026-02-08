//Função com parâmetro e retorno

let username = "Kauan Santos Oliveira";

function getFirstName(name){
    let firstName = name.split(" ")[0];
    return firstName;
}

console.log(getFirstName(username));
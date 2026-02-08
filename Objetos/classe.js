class formaDeBolo {
    constructor(saborMassa, saborRecheio) {
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }

    // Método dentro de uma classe para escrever a descrição do bolo
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
    }
}

// Passando os sabores da massa e do recheio para criar um novo bolo
let bolo = new formaDeBolo("Cenoura", "Chocolate");

// Chamando o método para escrever a descrição do bolo
bolo.escrever();
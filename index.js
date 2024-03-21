//declarando uma estrutura de classe com variaveis this
class hero{
    constructor(nome, idade, tipo, atake){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.atake = atake
    }
 //metodo atacar   
    atacar(){
        console.log(`O ${this.tipo} atacou ${this.atake}`)
    }
}

let heroi = new hero("Tob", 26, "Guerreiro", "usando espada")
heroi.atacar()

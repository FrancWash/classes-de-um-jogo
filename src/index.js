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
//interpolarização de strings
let heroi = new hero("Tob", 26, "Guerreiro", "usando espada")
let heroiNinja = new hero("Naruto", 16, "ninja", "usando shuriken")
heroi.atacar()
heroiNinja.atacar()

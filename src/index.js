//declarando uma estrutura de classe com variaveis this
class hero{
    constructor(nome, idade, tipo, atake){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.atake = atake
    }
 //metodo atacar   
 //Estruturas de decisões
    atacar(){
        let atake = this.atake
        switch (this.tipo){
            case "Guerreiro":
              break
            case "Mago":
               break
            case "Ninja":
                break
                default:
                    atake = "Atacou"
        }

        console.log(`O ${this.tipo} atacou ${this.atake}`)
    } 
}
//interpolarização de strings
let heroi = new hero("Tob", 26, "Guerreiro", "usando espada")
heroi.atacar()// O Tob atacou usando a espada

let heroiNinja = new hero("Naruto", 16, "ninja", "usando shuriken")
heroiNinja.atacar()//O Naruto atacou usando o shriken

// Objetos em JS.
// Exemplo de objeto:

let amigo = {
nome: "José",
gen: "M",
peso: 85.2,
engordar(p=0){
    console.log("Engordou")
    this.peso += p
}
}
// Objetos são representados em {}, e pertencem a mesma classe dos arrays, logo, ambos são objects;
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

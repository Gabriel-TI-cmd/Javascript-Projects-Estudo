let num = [5, 2 ,4, 9]
num.push(8) // O push() é um método interno do JS, que adiciona elementos na última posição do array;
num[5] = 1 // Adicionando elementos no array, na posição que eu escolher pelo índice em [];
console.log(`O nosso vetor é o ${num}`)
console.log(`O nosso vetor tem ${num.length} elementos.`) //O length é um atributo do JS, e não um método. E não tem ();
// O length serve para saber o número de elementos de algo, por exemplo, um array;
console.log(`Esse mesmo vetor, em ordem crescente, é ${num.sort()}`) // O método interno sort() ajusta os elementos, do array, em ordem crescente;
console.log(`O primeiro valor do vetor é ${num[0]}`) // Irá mostrar 1, e não 5, como primeiro elemento, porque o sort() ajustou;
let pos = num.indexOf(11)
if (pos == -1) {
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor está na posição ${pos}`)
}

let valores = [1, 5, 3, 2, 8]
valores.sort()
/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // for(){} simplificado que só funciona para arrays e objetos;
// Todo array em JS é um object;

function parOuImpar(n){
    if (n % 2 == 0){
        return "Par!"
    } else {
        return "Impar!"
    }
}

console.log(`O número é ${parOuImpar(5)}`)

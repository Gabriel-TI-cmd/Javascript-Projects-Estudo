// RECURSIVIDADE: Acontece quando uma função chama ela mesma, e pode ser mais de uma vez;
let fat = function fatorial(n){
    if (n == 0 || n == 1){
        return 1
    } else{
        return n * fatorial(n - 1)
    }
}

console.log(`O fatorial do número é ${fat(5)}`)

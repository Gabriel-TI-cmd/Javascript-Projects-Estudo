let f = function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(`O fatorial do número é ${f(5)}`)
// Forma tradicional de calcular fatorial pelo JS;

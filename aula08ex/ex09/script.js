function contar(){
    var ini = document.getElementById("ini")
    var fim = document.querySelector("input#fim")
    var passo = document.querySelector("input#passo")
    var res = document.querySelector("div#res")
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value == 0 || ini.value == fim.value){
        alert("[ERRO] Entrada inválida!")
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = `<p>Contando:</p>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3F4}`
    }
}

function gerar_tab() {
    let num = document.querySelector("input#num")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0) {
        window.alert("[ERRO] Por favor, digite um valor!")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ``
        for (let c = 0; c <= 10; c++) {
            let item = document.createElement("option") // Cria-se aqui o elemento option;
            item.text = `${n} x ${c} = ${n*c}` // Cria-se aqui cada linha da tabuada;
            tab.appendChild(item) // Adiciona o elemento option no select;
        }
    }
}
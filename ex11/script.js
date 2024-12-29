let lista = []
let cont = 0
let soma = 0
let n = document.getElementById("num")
let add = document.querySelector("select#add")
let res = document.getElementById("res")
function adicionar(){
    res.innerHTML = ``
    if (n.value.length == 0 || n.value > 100 || n.value < 1){
        alert("[ERRO] Digite um valor, corretamente, na caixa de texto!")
    } else{
        if (lista.indexOf(Number(n.value)) != -1){
            alert("[ERRO] Valor inválido! Tente outro número...")
        } else{
            lista.push(Number(n.value))
            cont += 1
            soma += Number(n.value)
            let item = document.createElement("option")
            item.text = `Valor ${Number(n.value)} adicionado.`
            add.appendChild(item)
        }
    }
    n.value = `` // Apaga o valor digitado do input;
    n.focus() // Mantém o cursor do mouse piscando no input;
}

function finalizar(){
    if (lista.length == 0 || n.value.length == 0 || n.value > 100 || n.value < 1){
        alert("[ERRO] Adicione valores antes de finalizar!")
    } else{
        let maior = lista[0]
        let menor = lista[0]
        for(let pos in lista){
            if(lista[pos] > maior){
                maior = lista[pos]
            }
            if(lista[pos] < menor){
                menor = lista[pos]
            }
        }
        let média = soma / cont
        res.innerHTML = `<p>Ao todo, temos ${cont} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média}</p>`
    }
}

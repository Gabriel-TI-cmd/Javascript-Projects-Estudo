function verificar() {
    var ano = window.document.getElementById("ano")
    var gen = window.document.querySelector('input[name="genero"]:checked').value
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasc = Number.parseInt(ano.value)
    var idade = ano_atual - ano_nasc
    if (ano.value.length == 0 || Number(ano.value) > ano_atual || Number(ano.value) < 1904) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        if (idade < 12) {
            msg.style.textAlign = "center"
            msg.innerHTML = `<p>Detectamos ${gen} criança de ${idade} anos de idade.</p>`
            if (gen == "homem") {
                img.src = "crianca_menino.png"
            } else{
                img.src = "crianca_menina.png"
            }
        } else if (idade < 25) {
            msg.style.textAlign = "center"
            msg.innerHTML = `<p>Detectamos ${gen} jovem de ${idade} anos de idade.</p>`
            if (gen == "homem") {
                img.src = "jovem_homem.png"
            } else{
                img.src = "jovem_mulher.png"
            }
        } else if (idade < 65) {
            msg.style.textAlign = "center"
            msg.innerHTML = `<p>Detectamos ${gen} adulto(a) de ${idade} anos de idade.</p>`
            if (gen == "homem") {
                img.src = "adulto.png"
            } else{
                img.src = "adulta.png"
            }
        } else {
            msg.style.textAlign = "center"
            msg.innerHTML = `<p>Detectamos ${gen} idoso(a) de ${idade} anos de idade.</p>`
            if (gen == "homem") {
                img.src = "idoso1.png"
            } else{
                img.src = "idosa1.png"
            }
        }
    }
}

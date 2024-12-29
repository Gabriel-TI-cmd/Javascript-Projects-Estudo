function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `<p>Olá, bom dia. Agora são <strong>${hora}</strong> horas.</p>`
        img.src = "manhafoto.png"
        window.document.body.style.background = 'rgb(107, 107, 226)'
    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML = `<p>Olá, boa tarde. Agora são <strong>${hora}</strong> horas.</p>`
        img.src = "tardefoto.png"
        window.document.body.style.background = 'rgb(255, 165, 100)'
    } else {
        msg.innerHTML = `<p>Olá, boa noite. Agora são <strong>${hora}</strong> horas.</p>`
        img.src = "noitefoto.png"
        window.document.body.style.background = 'rgb(50, 50, 50)'
    }
}

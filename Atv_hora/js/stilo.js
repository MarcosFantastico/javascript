function hora()
{
    var body = window.document.getElementById("corpo")
    var texto = window.document.getElementById("txt")
    var imagem = window.document.getElementById("img")
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    if(horas >= 0 && horas < 12)
    {
        texto.innerText = `Agora são ${horas} horas ${minutos} minutos e ${segundos} segundos, Bom dia!`
        texto.style.color="rgb(251, 223, 103)"
        imagem.src = "imgs/manha.png"
        body.style.backgroundColor="rgb(251, 223, 103)"
    }
    else if(horas >= 12 && horas < 18)
    {
        texto.innerText = `Agora são ${horas} horas ${minutos} minutos e ${segundos} segundos, Boa tarde!`
        texto.style.color = "#879bb4"
        imagem.src = "imgs/tarde.png"
        body.style.backgroundColor="#879bb4"
    }
    else
    {
        texto.innerText = `Agora são ${horas} horas ${minutos} minutos e ${segundos} segundos, Boa noite!`
        texto.style.color = "#2a557f"
        imagem.src = "imgs/noite.png"
        body.style.backgroundColor="#2a557f"
    }
    setInterval(hora, 1000)
}
function conta()
{
    var inicio = window.document.getElementsByTagName("input")[0].value
    var fim = window.document.getElementsByTagName("input")[1].value
    var intervalo = window.document.getElementsByTagName("input")[2].value
    var resultado = window.document.getElementById("res")

    if(inicio.length == "" || fim.length =="" || intervalo.length=="")
    {
        resultado.innerHTML="Impossivel contar"
    }
    
    else
    {
        var i = Number.parseInt(inicio)
        var f = Number.parseInt(fim)
        var int = Number.parseInt(intervalo)
        resultado.innerHTML = 'Contando... <br> '
        
        if(i<=0)
        {
            window.alert("Número inicial inválido, consideraremos-o no valor 1")
            i=1
        }
        if(f<=0)
        {
            window.alert("Número final inválido, consideraremos-o no valor de 10")
            f=10
        }

        if(int <= 0)
        {
            window.alert("Intervalo inválido, consideraremos-o no valor 1")
            int=1
        }
        
        //Contagem progressiva
        if(i<f)
        {
            for( var cont=i; cont<=f; cont+=int)
            {
             resultado.innerHTML += `${cont} \u{1f449} `
            } 

        }
        else
        {
            //Contagem regressiva
            for(var cont=i; cont>=f; cont-=int)
            {
                resultado.innerHTML += `${cont} \u{1f449}`
            }

        }

        resultado.innerHTML += `\u{1f3c1}`
        

    }
    
}
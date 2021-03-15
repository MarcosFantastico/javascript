function tabuada()
{
    
    var numero = window.document.getElementsByTagName("input")[0].value
    var tab = window.document.getElementById("tab")
    

    if(numero.length == 0)
    {
        window.alert('Por favor digite um número')
    }
    else
    {
        tab.innerHTML=''
        n = Number.parseInt(numero)
        window.document.getElementById("res").innerHTML="Resultado:<br>"

    for(var cont=1;cont<=10;cont++)
    {
        let item = window.document.createElement('option')
        item.innerHTML = `${cont} X ${n} = ${cont*n}`
        item.value = `opt${cont}`
        tab.appendChild(item)
    }
    }
}
function idade()
{
    var data = new Date()
    var ano = data.getFullYear()
    var texto = window.document.getElementById("texto")
    var nome = window.document.getElementById("N").value
    var ano_nasc = window.document.getElementById("ano").value
    var sexo = window.document.getElementsByName("radsex")
    var genero =''
    var idade = ano - ano_nasc
    var imagem = window.document.createElement("img")

    if(ano_nasc > ano || ano_nasc == 0 || ano_nasc <= 1900)
    {
        texto.innerText='Data de nascimento inválida!'
    }

    if(sexo[0].checked)
    {
        genero = 'Masculino'

        if(idade > 0 && idade <= 10)
        {
            imagem.setAttribute('src' , 'foto-bebe-m.png') 
        }
        else if(idade > 10 && idade <= 18 )
        {
            imagem.setAttribute('src', 'imgs/foto-jovem-m.png')
        }
        else if(idade > 18 && idade <=50)
        {
            imagem.setAttribute('src', 'imgs/foto-adulto-m.png')
        }
        else
        {
            imagem.setAttribute('src', 'imgs/foto-idoso-m.png')
        }
    }
    else
    {
        genero = 'Feminino'

        if(idade > 0 && idade <= 10)
        {
            imagem.setAttribute('src' , 'imgs/bebemenina.png') 
        }
        else if(idade > 10 && idade <= 18 )
        {
            imagem.setAttribute('src', 'imgs/foto-jovem-f.png')
        }
        else if(idade > 18 && idade <=50)
        {
            imagem.setAttribute('src', 'imgs/foto-adulto-f.png')
        }
        else
        {
            imagem.setAttribute('src', 'imgs/foto-idoso-f.png')
        }
    }
    texto.innerText=`Olá ${nome}! Você tem ${idade} anos! Do sexo ${genero}`
    texto.appendChild(imagem)

   
}
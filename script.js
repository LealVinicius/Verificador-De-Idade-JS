function verificar() {
    var data = new Date()
    ano = data.getFullYear()
    var nasc = document.getElementById('idcampoidade').value;
    idade = ano - nasc;

    if (nasc > ano || nasc.length == null || nasc < 1900) {
        window.alert('[ERRO] - Verifique a data informada e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2) {
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 12) {
                img.setAttribute('src', 'images/crianca.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'images/menino.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/homem.png')
            } else {
                img.setAttribute('src', 'images/velho.png')
            }
        }
        else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                img.setAttribute('src', 'images/bebemenina.png')
            } else if (idade < 15) {
                img.setAttribute('src', 'images/menina.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'images/moca.png')
            } else if (idade < 48) {
                img.setAttribute('src', 'images/mulher.png')
            } else {
                img.setAttribute('src', 'images/velha.png')
            }
        }
        if (idade == 1) {
            res.innerHTML = `Detectamos um ${genero} com ${idade} ano`
        } else {
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        }

        res.appendChild(img)
    }


}
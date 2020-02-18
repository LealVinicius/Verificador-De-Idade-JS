function verificar() {

    var data = new Date()
    ano = data.getFullYear()
    var nasc = document.getElementById('idcampoidade').value;
    idade = ano - nasc;

    window.alert(nasc)
    window.alert(`Você tem ${idade}` + ' anos')
    if (nasc > ano || nasc.length() == null) {
        window.alert('[ERRO] - Verifique os dados e tente novamente')
    }

    
    var feminino = document.getElementById('masc')
    var masculino = document.getElementById('fem')

    window.alert(feminino)
    window.alert(masculino)
    window.alert(idade + ' anos');

    //else if() {}
}   

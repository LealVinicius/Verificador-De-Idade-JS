function verificar() {

    var data = new Date()
    ano = data.getFullYear()
    var nasc = document.getElementById('idcampoidade').value;
    idade = ano-nasc;

    var feminino = document.getElementById('masc')
    var masculino = document.getElementById('fem')
    

    window.alert(idade + ' anos');
    if(idade && sexo){}
    //else if() {}
}   
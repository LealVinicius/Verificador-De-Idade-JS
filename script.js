function verificar() {

    var data = new Date()
    ano = data.getFullYear()
    var nasc = document.getElementById('idcampoidade').value;
    idade = ano-nasc;
    window.alert(idade + ' anos');
   // if(){}
    //else if() {}
} 
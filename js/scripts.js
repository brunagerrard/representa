//CONTADOR REGRESSIVO
var contador = new Date("aug 26,2020 19:30:00").getTime(); //define a data do evento, mudar aqui caso precise

var x = setInterval(function() {
    var dataAtual = new Date().getTime();
    var d = contador - dataAtual;

    var dias = Math.floor(d / (1000 * 60 * 60 * 24));
    var horas = Math.floor((d % (1000 * 60 * 60 * 24))/(1000 * 60  * 60));
    var minutos = Math.floor((d % (1000 * 60 * 60))/(1000 * 60));
    var segundos = Math.floor((d % (1000 * 60))/(1000));

   

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if(d <= 0){
        clearInterval(x);
    }     
}, 1000); //atualização de segundo em segundo

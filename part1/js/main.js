//Parte 1 funcion de trabajo de la semana


function horaNegocios(diaNumero, horaNumero){
    if ((diaNumero>=1) && (diaNumero <=5) && (horaNumero >= 9) && (horaNumero <=18))
    {
        return true;
    }else {
        return false;
    }
    
}

console.log(horaNegocios(6, 9));

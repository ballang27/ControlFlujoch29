//Parte 3

function horaNegocios(diaNumero, horaNumero){
    if ((diaNumero>=1) && (diaNumero <=5) && (horaNumero >= 9) && (horaNumero <=18))
    {
        return true;
    }else {
        return false;
    }
    
}
function obtenerNumDia (primerDiaEnero, numeroDiaAno){
    return (numeroDiaAno-1)%7;
}

function horarioComercial(numeroDiaAno, horaNumero){
    let dia = obtenerNumDia( 0, numeroDiaAno);

    return horaNegocios(dia, horaNumero);
}
console.log(horarioComercial(45, 17));



